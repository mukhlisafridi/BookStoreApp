import express from "express";
import { getBook } from "./../controller/getBook.js";

const router = express.Router();

router.get("/", getBook);

export default router;

