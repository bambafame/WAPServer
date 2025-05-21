import express from "express";
import {
  getAllProducts,
  searchProducts,
  createProduct,
  updateProduct,
} from "../controllers/productController";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/search", searchProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);

export default router;
