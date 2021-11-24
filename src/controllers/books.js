import BooksModel from '../models/books.js';

export const getAllBooks = async () => {
	const books = await BooksModel.find({});
	return books;
}