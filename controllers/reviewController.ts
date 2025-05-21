import Review from "../models/Review";
import Product from "../models/Product";
import { Request, Response } from "express";
import calculateAverageRating from "../utils/calculateAverageRating";

export const getReviewsByProduct = async (req: Request, res: Response) => {
  try {
    const reviews = await Review.find({ productId: req.params.productId });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch reviews" });
  }
};

export const createReview = async (req: Request, res: Response) => {
  try {
    const { author, rating, comment } = req.body;
    const review = await Review.create({
      productId: req.params.productId,
      author,
      rating,
      comment,
    });
    await calculateAverageRating(req.params.productId);
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: "Failed to create review" });
  }
};

export const updateReview = async (req: Request, res: Response) => {
  try {
    const updated = await Review.findByIdAndUpdate(
      req.params.reviewId,
      req.body,
      { new: true }
    );
    await calculateAverageRating(req.params.productId);
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: "Failed to update review" });
  }
};

export const deleteReview = async (req: Request, res: Response) => {
  try {
    await Review.findByIdAndDelete(req.params.reviewId);
    await calculateAverageRating(req.params.productId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Failed to delete review" });
  }
};
