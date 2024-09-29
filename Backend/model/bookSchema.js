import mongoose from "mongoose";
const bookSchema = mongoose.Schema({
  Name: String,
  Title: String,
  price: Number,
  category: String,
  imgUrl: String,
});


const Book = mongoose.model("Book",bookSchema)
export default Book;
