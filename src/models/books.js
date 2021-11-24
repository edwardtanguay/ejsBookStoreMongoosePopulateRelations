import mongoose from 'mongoose';

const booksSchema = mongoose.Schema({
	title: String,
	author: String
}, { collection: "books" });
const BooksModel = mongoose.model("Book", booksSchema);

export default BooksModel;
