import express from "express";
import {
  getTenantDashboard,
  getLandlordDashboard,
  getManagerDashboard,
} from "../controller/dashboardController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Only logged-in users can access this
router.get("/tenant", protect, getTenantDashboard);
router.get("/landlord", protect, getLandlordDashboard);
router.get("/manager", protect, getManagerDashboard);

export default router;
