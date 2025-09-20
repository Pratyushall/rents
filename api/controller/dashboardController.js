export const getTenantDashboard = async (req, res) => {
  try {
    const userId = req.user.id;

    // Fetch tenant-specific data
    const user = await prisma.users.findUnique({
      where: { id: userId },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        role: true,
      },
    });

    if (!user || user.role.toLowerCase() !== "tenant") {
      return res.status(403).json({ message: "Access denied" });
    }

    res.status(200).json({
      message: "Tenant dashboard loaded",
      data: user,
    });
  } catch (error) {
    console.error("DASHBOARD ERROR:", error);
    res.status(500).json({ message: "Failed to load tenant dashboard" });
  }
};

// api/controller/dashboardController.js
export const getLandlordDashboard = async (req, res) => {
  try {
    const landlordId = req.user.id;
    const now = new Date();
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const lastMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0);

    // ① Total properties & occupied/vacant
    const totalProperties = await prisma.properties.count({
      where: { landlord_id: landlordId },
    });
    const occupiedCount = await prisma.leases.count({
      where: {
        landlord_id: landlordId,
        endDate: { gte: now },
      },
    });
    const vacantCount = totalProperties - occupiedCount;

    // ② Monthly revenue & % change
    const currentAgg = await prisma.payments.aggregate({
      where: {
        landlord_id: landlordId,
        paymentDate: { gte: monthStart },
      },
      _sum: { amount: true },
    });
    const lastAgg = await prisma.payments.aggregate({
      where: {
        landlord_id: landlordId,
        paymentDate: { gte: lastMonthStart, lte: lastMonthEnd },
      },
      _sum: { amount: true },
    });
    const monthlyRevenue = parseFloat(currentAgg._sum.amount || 0);
    const lastRevenue = parseFloat(lastAgg._sum.amount || 0);
    const revenueChange = lastRevenue
      ? (((monthlyRevenue - lastRevenue) / lastRevenue) * 100).toFixed(1)
      : null;

    // ③ Pending certificates
    const pendingCertificates = await prisma.propertyCertificates.count({
      where: {
        Properties: { landlord_id: landlordId },
      },
    });

    // ④ Active tenants (distinct tenant_id for leases still running)
    const activeGroups = await prisma.leases.groupBy({
      by: ["tenant_id"],
      where: {
        landlord_id: landlordId,
        endDate: { gte: now },
      },
    });
    const activeTenants = activeGroups.length;

    // ⑤ New tenants this month
    const newGroups = await prisma.leases.groupBy({
      by: ["tenant_id"],
      where: {
        landlord_id: landlordId,
        startDate: { gte: monthStart },
      },
    });
    const newTenants = newGroups.length;

    return res.json({
      totalProperties,
      occupiedCount,
      vacantCount,
      monthlyRevenue,
      revenueChange,
      pendingCertificates,
      activeTenants,
      newTenants,
    });
  } catch (err) {
    console.error("LANDLORD DASH ERROR:", err);
    res.status(500).json({ message: "Failed to load landlord dashboard" });
  }
};

export const getManagerDashboard = async (req, res) => {
  try {
    const now = new Date();
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const lastMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0);

    const totalProperties = await prisma.properties.count();
    const activeDisputes = await prisma.dispute.count({
      where: { status: { in: ["OPEN", "IN_PROGRESS"] } },
    });

    const currentAgg = await prisma.payments.aggregate({
      where: { paymentDate: { gte: monthStart } },
      _sum: { amount: true },
    });
    const lastAgg = await prisma.payments.aggregate({
      where: { paymentDate: { gte: lastMonthStart, lte: lastMonthEnd } },
      _sum: { amount: true },
    });
    const monthlyRevenue = parseFloat(currentAgg._sum.amount || 0);
    const lastRevenue = parseFloat(lastAgg._sum.amount || 0);
    const revenueChange = lastRevenue
      ? (((monthlyRevenue - lastRevenue) / lastRevenue) * 100).toFixed(1)
      : null;

    const pendingMaintenance = await prisma.maintenanceRequests.count({
      where: { status: "PENDING" },
    });
    const pendingIssues = pendingMaintenance;

    return res.status(200).json({
      totalProperties,
      activeDisputes,
      monthlyRevenue,
      revenueChange,
      pendingIssues,
    });
  } catch (err) {
    console.error("Manager Dashboard Error:", err);
    return res
      .status(500)
      .json({ message: "Failed to load manager dashboard" });
  }
};
