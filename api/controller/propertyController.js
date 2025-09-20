import prisma from "../lib/prisma.js";

// GET /api/properties/my
export const getMyProperties = async (req, res) => {
  const userId = req.user.id;
  try {
    let properties;
    if (req.user.role === "TENANT") {
      // tenant: show properties via leases
      const leases = await prisma.leases.findMany({
        where: { tenant_id: userId },
        include: { Properties: true },
      });
      properties = leases.map((l) => l.Properties).filter((p) => p);
    } else if (req.user.role === "LANDLORD") {
      // landlord: properties you own
      properties = await prisma.properties.findMany({
        where: { landlord_id: userId },
      });
    } else {
      // manager/admin: all properties (or you could filter by assignments)
      properties = await prisma.properties.findMany();
    }
    res.json(properties);
  } catch (err) {
    console.error("GET MY PROPERTIES ERROR:", err);
    res.status(500).json({ message: "Failed to fetch properties" });
  }
};

// POST /api/properties
export const createProperty = async (req, res) => {
  const userId = req.user.id;
  const { propertyType, area, availableFrom, status, isAvailable } = req.body;
  try {
    const prop = await prisma.properties.create({
      data: {
        landlord_id: userId,
        createdBy: userId,
        propertyType,
        area,
        availableFrom: new Date(availableFrom),
        status,
        isAvailable,
      },
    });
    res.status(201).json(prop);
  } catch (err) {
    console.error("CREATE PROPERTY ERROR:", err);
    res.status(500).json({ message: "Failed to create property" });
  }
};

// PUT /api/properties/:id
export const updateProperty = async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await prisma.properties.update({
      where: { id },
      data: req.body,
    });
    res.json(updated);
  } catch (err) {
    console.error("UPDATE PROPERTY ERROR:", err);
    res.status(500).json({ message: "Failed to update property" });
  }
};

// DELETE /api/properties/:id
export const deleteProperty = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.properties.delete({ where: { id } });
    res.json({ message: "Property deleted" });
  } catch (err) {
    console.error("DELETE PROPERTY ERROR:", err);
    res.status(500).json({ message: "Failed to delete property" });
  }
};
