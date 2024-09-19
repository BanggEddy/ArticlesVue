const express = require("express");
const Article = require("../models/articles");
const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();
const saltRounds = 10;
const JWT_SECRET = process.env.JWT_SECRET;

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/addarticles", async (req, res) => {
  const { namearticle, descriptionarticle } = req.body;
  const newArticle = new Article({
    namearticle,
    descriptionarticle,
  });

  try {
    const savedArticle = await newArticle.save();
    res.status(201).json(savedArticle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/articles", async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "User non trouvé" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = jwt.sign({ _id: user._id, role: user.role }, JWT_SECRET, {
        expiresIn: "1h",
      });
      res.json({ token, user });
    } else {
      res.status(401).json({ message: "Mdp incorrect" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erreur serv" });
  }
});

module.exports = router;
