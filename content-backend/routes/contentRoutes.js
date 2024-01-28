const express = require('express');
const Content = require('../models/Content');
const router = express.Router();

router.post('/submit-content', async (req, res) => {
  console.log('Received data:', req.body);
  try {
    const newContent = new Content({
      title: req.body.title,
      description: req.body.description,
      link: req.body.link
    });

    const savedContent = await newContent.save();
    console.log('Saved content:', savedContent);
    res.status(201).json(savedContent);
  } catch (error) {
    console.error('Error saving content:', error);
    res.status(400).json({ message: error.message });
  }
});
router.get('/contents', async (req, res) => {
  try {
    const contents = await Content.find();
    res.json(contents);
  } catch (error) {
    console.error('Error fetching contents:', error);
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
