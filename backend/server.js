const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost/english-vocab', { useNewUrlParser: true, useUnifiedTopology: true });

const wordSchema = new mongoose.Schema({
  word: String,
  meaning: String,
  example: String,
  partOfSpeech: String
});

const Word = mongoose.model('Word', wordSchema);

app.post('/api/words', async (req, res) => {
  const newWord = new Word(req.body);
  await newWord.save();
  res.send(newWord);
});

app.get('/api/words', async (req, res) => {
  const words = await Word.find({ word: { $regex: req.query.q, $options: 'i' } });
  res.send(words);
});

app.listen(5000, () => console.log('Server started on port 5000'));
