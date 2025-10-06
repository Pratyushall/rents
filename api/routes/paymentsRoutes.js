// api/routes/paymentsRoutes.js
import express from "express";
import prisma from "../lib/prisma.js";

const router = express.Router();

// Simple sanity endpoint
router.get("/health", (_req, res) => res.json({ ok: true }));

// List recent payments
router.get("/", async (_req, res) => {
  try {
    const items = await prisma.payments.findMany({
      take: 50,
      orderBy: { paymentDate: "desc" },
    });
    res.json(items);
  } catch (e) {
    console.error("List payments error:", e);
    res.status(500).json({ error: "Server error" });
  }
});

// Get one payment
router.get("/:id", async (req, res) => {
  try {
    const item = await prisma.payments.findUnique({
      where: { id: req.params.id },
    });
    if (!item) return res.status(404).json({ error: "Not found" });
    res.json(item);
  } catch (e) {
    console.error("Get payment error:", e);
    res.status(500).json({ error: "Server error" });
  }
});

// Create a payment (minimal required fields)
router.post("/", async (req, res) => {
  try {
    const {
      tenant_id = null,
      landlord_id = null,
      property_id = null,
      amount = null,
      paymentMethod = null,
      paymentStatus = "PAID",
    } = req.body ?? {};

    const created = await prisma.payments.create({
      data: {
        tenant_id,
        landlord_id,
        property_id,
        amount,
        paymentMethod,
        paymentStatus,
      },
    });
    res.status(201).json(created);
  } catch (e) {
    console.error("Create payment error:", e);
    res.status(500).json({ error: "Server error" });
  }
});

// Delete a payment
router.delete("/:id", async (req, res) => {
  try {
    await prisma.payments.delete({ where: { id: req.params.id } });
    res.json({ ok: true });
  } catch (e) {
    console.error("Delete payment error:", e);
    res.status(404).json({ error: "Not found" });
  }
});

export default router;
