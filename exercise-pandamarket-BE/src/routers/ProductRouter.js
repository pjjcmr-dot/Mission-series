import express from "express";
import { ProductModel } from "../repository/ProductRepository.js";

const router = express.Router();

// 상품 등록
router.post("/", async (req, res) => {
  const product = await ProductModel.create(req.body);
  res.status(201).json(product);
});

// 상품 목록 조회
router.get("/", async (req, res) => {
  const { skip = 0, take = 10, orderBy, word } = req.query;

  const filter = word
    ? {
        $or: [
          { name: { $regex: word, $options: "i" } },
          { description: { $regex: word, $options: "i" } },
        ],
      }
    : {};

  const sort = orderBy === "recent" ? { createdAt: -1 } : {};

  const [list, count] = await Promise.all([
    ProductModel.find(filter).sort(sort).skip(Number(skip)).limit(Number(take)),
    ProductModel.countDocuments(filter),
  ]);

  res.json({ list, count });
});

// 상품 상세 조회
router.get("/:productId", async (req, res) => {
  const product = await ProductModel.findById(req.params.productId);
  res.json(product);
});

// 상품 수정
router.patch("/:productId", async (req, res) => {
  const product = await ProductModel.findByIdAndUpdate(
    req.params.productId,
    req.body,
    { new: true },
  );
  res.json(product);
});

// 상품 삭제
router.delete("/:productId", async (req, res) => {
  await ProductModel.findByIdAndDelete(req.params.productId);
  res.sendStatus(204);
});

export default router;
