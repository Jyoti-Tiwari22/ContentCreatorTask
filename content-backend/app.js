const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const contentRoutes = require('./routes/contentRoutes');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/evallo')
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB", err));

app.use('/api', contentRoutes);

app.use(express.static(path.join(__dirname, '../content-frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../content-frontend/build/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
