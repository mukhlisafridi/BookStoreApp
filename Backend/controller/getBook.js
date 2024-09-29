import booksData from "../model/bookSchema.js";
export const getBook = async (req, res) => {
  try {
    const book = await booksData.find();
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

