const Author = require('../models/author');

exports.getAll = async (req, res) => {
  const authors = await Author.find();
  res.status(200).json(authors);
};

exports.update = async (req, res) => {
  const updated = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json(updated);
};