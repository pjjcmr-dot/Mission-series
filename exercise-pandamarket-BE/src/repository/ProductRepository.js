import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    tags: { type: [String], required: true, default: [] },
    images: { type: [String], required: true, default: [] },
  },
  { timestamps: true },
);

export const ProductModel = mongoose.model("Product", productSchema);
