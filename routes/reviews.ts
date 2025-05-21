import express from "express";
import {
  getReviewsByProduct,
  createReview,
  updateReview,
  deleteReview,
} from "../controllers/reviewController";

const router = express.Router();

router.get("/:productId", getReviewsByProduct);
router.post("/:productId", createReview);
router.put("/:productId/:reviewId", updateReview);
router.delete("/:productId/:reviewId", deleteReview);

export default router;
