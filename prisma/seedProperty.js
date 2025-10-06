// File: api/prisma/seedProperty.js

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const landlord = await prisma.users.findFirst({
    where: { role: "LANDLORD" },
  });

  if (!landlord) {
    console.error("❌ No landlord found.");
    return;
  }

  await prisma.properties.create({
    data: {
      landlord_id: landlord.id,
      createdBy: landlord.id,
      propertyType: "APARTMENT", // Assuming this is a valid enum value
      area: 850.0,
      isAvailable: true,
      availableFrom: new Date("2025-07-01"),
      status: "PENDING_VERIFICATION", // Assuming this is your default enum
    },
  });

  console.log("✅ Property created successfully.");
}

main()
  .catch((e) => {
    console.error("❌ Property seed error:", e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
