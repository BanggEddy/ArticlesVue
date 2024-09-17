const express = require('express');
const ArticleModelCopy = require("../models/articles");
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.post('/addarticles', async (req, res) => {
  try {
    const { namearticle, descriptionarticle } = req.body;
    const newArticle = new ArticleModelCopy({
      namearticle,
      descriptionarticle,
    });

    const savedArticle = await newArticle.save();
    res.status(201).json(savedArticle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
