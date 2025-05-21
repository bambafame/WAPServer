import Review from "../models/Review";
import Product from "../models/Product";

const calculateAverageRating = async (productId: string) => {
  const reviews = await Review.find({ productId });
  const total = reviews.reduce((sum, r) => sum + r.rating, 0);
  const average = reviews.length ? total / reviews.length : 0;
  await Product.findByIdAndUpdate(productId, { averageRating: average });
};

export default calculateAverageRating;
