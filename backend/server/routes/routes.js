const express = require('express');
const ArticleModelCopy = require("../models/articles");
const UsersModelCopy = require("../models/users");
const Article = require("../models/articles")
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

router.get('/articles', async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.post('/api/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUsers = new UsersModelCopy({
      username,
      email,
      password,
    });

    const savedUsers = await newUsers.save();
    res.status(201).json(savedUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
