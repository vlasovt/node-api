const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const Book = require('./models/bookModel');

mongoose.connect('mongodb+srv://askold:watchman@cluster0-us31b.mongodb.net/booksAPI?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const port = process.env.port || 3000;
const bookRouter = require('./routes/bookRouter')(Book);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to Node API');
});

app.listen(port, () => {});
