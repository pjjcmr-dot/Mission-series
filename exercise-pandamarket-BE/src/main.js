import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import ProductRouter from "./routers/ProductRouter.js";

const app = express();
const PORT = process.env.HTTP_PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/products", ProductRouter);

mongoose.connect(process.env.MONGO_URL);

app.listen(PORT, () => {
  console.log(`서버가 ${PORT}번 포트에서 실행중입니다.`);
});
