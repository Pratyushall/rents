import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function run() {
  const pwd = await bcrypt.hash("password123", 10);

  await prisma.users.createMany({
    data: [
      {
        firstName: "Admin",
        lastName: "User",
        email: "admin@demo.app",
        phoneNo: "9000000001",
        password: pwd,
        role: "ADMIN",
      },
      {
        firstName: "John",
        lastName: "Landlord",
        email: "landlord@demo.app",
        phoneNo: "9000000002",
        password: pwd,
        role: "LANDLORD",
      },
      {
        firstName: "Sarah",
        lastName: "Tenant",
        email: "tenant@demo.app",
        phoneNo: "9000000003",
        password: pwd,
        role: "TENANT",
      },
      {
        firstName: "Mike",
        lastName: "Manager",
        email: "manager@demo.app",
        phoneNo: "9000000004",
        password: pwd,
        role: "MANAGER",
      },
    ],
    skipDuplicates: true,
  });

  console.log("Seeded demo users.");
}

run().finally(() => prisma.$disconnect());
