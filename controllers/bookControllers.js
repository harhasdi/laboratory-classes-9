const Book = require('../models/book');

exports.getAll = async (req, res) => {
  const books = await Book.find().populate('author');
  res.status(200).json(books);
};

exports.create = async (req, res) => {
  const created = await Book.create(req.body);
  res.status(201).json(created);
};

exports.remove = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.status(204).end();
};