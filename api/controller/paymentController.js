import prisma from "../lib/prisma.js";

// GET /api/payments/my
export const getMyPayments = async (req, res) => {
  try {
    const userId = req.user.id;
    const payments = await prisma.payments.findMany({
      where: { tenant_id: userId },
      orderBy: { paymentDate: "desc" },
    });
    res.json(payments);
  } catch (err) {
    console.error("GET MY PAYMENTS ERROR:", err);
    res.status(500).json({ message: "Failed to fetch payments" });
  }
};

// POST /api/payments/initiate
export const initiatePayment = async (req, res) => {
  const userId = req.user.id;
  const { leaseId, amount, method } = req.body;
  try {
    // record the intent, status=PENDING
    const payment = await prisma.payments.create({
      data: {
        tenant_id: userId,
        lease_id: leaseId,
        amount,
        paymentMethod: method,
        paymentStatus: "PENDING",
      },
    });
    // TODO: integrate real gateway here (Stripe/Razorpay etc)
    // for now return the payment record:
    res.status(201).json(payment);
  } catch (err) {
    console.error("INITIATE PAYMENT ERROR:", err);
    res.status(500).json({ message: "Failed to initiate payment" });
  }
};
