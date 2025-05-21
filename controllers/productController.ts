import Product from "../models/Product";
import { Request, Response } from "express";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find().sort({ dateAdded: -1 });
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

export const searchProducts = async (req: Request, res: Response) => {
  try {
    const q = req.query.q as string;
    const results = await Product.find({ name: new RegExp(q, "i") });
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: "Failed to search products" });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ error: "Failed to create product" });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Failed to update product" });
  }
};
