import express from "express";
import dotenv from "dotenv";
import { connectionDB } from "./dataBase/db.js";
import bookRoute from "./routes/booksRoute.js";
import userRoute from "./routes/userRoute.js"
import cors from "cors"
const app = express();
  app.use(cors())
  app.use(express.json())
dotenv.config();
const PORT = process.env.PORT || 4000;

// dataBase connection
connectionDB();

//routing

app.use("/book", bookRoute);
app.use("/user",userRoute)
app.listen(PORT, () => {
  console.log(`port running on ${PORT}`);
});
