import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  dateAdded: { type: Date, default: Date.now },
  averageRating: { type: Number, default: 0 },
});

const Product = model("Product", productSchema);
export default Product;
