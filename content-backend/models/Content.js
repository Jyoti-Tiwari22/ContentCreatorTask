const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: false
  }
});

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;
