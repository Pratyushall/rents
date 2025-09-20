import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createTenant = async (req, res) => {
  const { name, email, phoneNumber, userId } = req.body;
  try {
    const tenant = await prisma.tenant.create({
      data: { name, email, phoneNumber, userId },
    });
    res.status(201).json(tenant);
  } catch (error) {
    res.status(500).json({ message: "Error creating tenant", error });
  }
};

export const getAllTenants = async (req, res) => {
  try {
    const tenants = await prisma.tenant.findMany({
      include: { user: true, properties: true, leases: true },
    });
    res.json(tenants);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tenants", error });
  }
};
