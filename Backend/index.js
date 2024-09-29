import express from "express";
import dotenv from "dotenv";
import { connectionDB } from "./dataBase/db.js";
import bookRoute from "./routes/booksRoute.js";
import userRoute from "./routes/userRoute.js"
import cors from "cors"
import path from 'path'
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
//deployment
if(process.env.NODE_ENV ==="production"){
const dirPath = path.resolve()
app.use(express.static(path.join()))
}
app.listen(PORT, () => {
  console.log(`port running on ${PORT}`);
});
