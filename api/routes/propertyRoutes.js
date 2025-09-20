import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  getMyProperties,
  createProperty,
  updateProperty,
  deleteProperty,
} from "../controller/propertyController.js";

const router = express.Router();
router.use(protect);

router.get("/my", getMyProperties);
router.post("/", createProperty);
router.put("/:id", updateProperty);
router.delete("/:id", deleteProperty);

export default router;
