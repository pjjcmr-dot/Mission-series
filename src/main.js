import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({ path: ".env/.env" });

const app = express();
const PORT = process.env.HTTP_PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL);

app.listen(PORT, () => {
  console.log(`서버가 ${PORT}번 포트에서 실행중입니다.`);
});
