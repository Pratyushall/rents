import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  getMyPayments,
  initiatePayment,
} from "../controller/paymentController.js";

const router = express.Router();
router.use(protect);

router.get("/my", getMyPayments);
router.post("/initiate", initiatePayment);

export default router;
