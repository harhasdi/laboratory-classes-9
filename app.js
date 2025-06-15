const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes');

mongoose.connect('mongodb://127.0.0.1:27017/lab9', {
  useNewUrlParser: true, useUnifiedTopology: true
});

const app = express();
app.use(cors(), express.json());

app.use('/api/books', bookRoutes);
app.use('/api/authors', authorRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: err.message });
});

app.listen(3000, () => console.log('Server on port 3000'));