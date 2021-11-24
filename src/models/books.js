import mongoose from 'mongoose';
import PersonsModel from '../models/persons.js';

const Schema = mongoose.Schema;

const booksSchema = mongoose.Schema({
	title: String,
	author: { type: Schema.ObjectId, ref: 'Person' }
}, { collection: "books" });
const BooksModel = mongoose.model("Book", booksSchema);

export default BooksModel;
