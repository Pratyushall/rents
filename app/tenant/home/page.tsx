import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import TenantDashboard from "./tenant.client";
import { prisma } from "@/lib/prisma";

export default async function TenantPage() {
  const session = await auth();
  if (!session) redirect("/login");
  // @ts-ignore
  if (session.user.role !== "TENANT") redirect("/post-auth");

  // hydrate initial state in one query (optimize later)
  const userId = (session.user as any).id ?? undefined; // Depending on your session, you might encode id; otherwise fetch by email
  const user = await prisma.user.findUnique({
    where: userId ? { id: userId } : { email: session.user?.email! },
    select: { id: true, email: true, role: true },
  });

  if (!user) redirect("/login");

  const application = await prisma.application.findFirst({
    where: { tenantId: user.id },
  });
  const hold = await prisma.hold.findFirst({
    where: { tenantId: user.id, status: "ACTIVE" },
  });
  const contract = await prisma.contract.findFirst({
    where: { applicationId: application?.id },
  });
  const payments = await prisma.payment.findMany({
    where: { tenantId: user.id },
    orderBy: { paidAt: "desc" },
    take: 3,
  });

  return (
    <TenantDashboard
      user={user}
      initial={{ application, hold, contract, payments }}
    />
  );
}
