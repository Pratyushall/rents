import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const landlord = await prisma.users.findFirst({
  where: { role: "LANDLORD" },
});

const property = await prisma.properties.findFirst({
  where: { landlord_id: landlord.id },
});

await prisma.leases.createMany({
  data: [
    {
      property_id: property.id,
      tenant_id: tenant.id,
      landlord_id: landlord.id,
      startDate: new Date("2025-06-01"),
      endDate: new Date("2026-06-01"),
      monthlyRent: 1500.0,
      depositAmount: 3000.0,
      signedAgreementURL: "https://example.com/agreement1.pdf",
      status: "ACTIVE",
    },
    {
      property_id: property.id,
      tenant_id: tenant.id,
      landlord_id: landlord.id,
      startDate: new Date("2025-05-15"),
      endDate: new Date("2026-05-15"),
      monthlyRent: 2000.0,
      depositAmount: 4000.0,
      signedAgreementURL: "https://example.com/agreement2.pdf",
      status: "ACTIVE",
    },
  ],
});
