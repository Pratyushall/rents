import express from "express";
import { getTenantLeases } from "../controller/leaseController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/my", protect, getTenantLeases);
export default router;
