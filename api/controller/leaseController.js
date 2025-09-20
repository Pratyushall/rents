import prisma from "../lib/prisma.js";

export const getTenantLeases = async (req, res) => {
  try {
    const tenantId = req.user.id;
    console.log("🔍 getTenantLeases tenantId:", tenantId);

    // Note: your Prisma model is named "Leases" (plural)
    const leases = await prisma.leases.findMany({
      where: { tenant_id: tenantId },
    });
    console.log("✅ Leases fetched:", leases);

    return res.status(200).json(leases);
  } catch (error) {
    console.error("❌ GET MY LEASES ERROR:", error);
    return res
      .status(500)
      .json({ message: "Failed to fetch leases", error: error.message });
  }
};
