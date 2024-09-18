const express = require('express');
const Article = require("../models/articles");
const User = require("../models/users");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();
const saltRounds = 10;
const JWT_SECRET = process.env.JWT_SECRET;

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.post('/addarticles', (req, res) => {
  const { namearticle, descriptionarticle } = req.body;
  const newArticle = new Article({
    namearticle,
    descriptionarticle,
  });

  new Promise((resolve, reject) => {
    newArticle.save((err, savedArticle) => {
      if (err) return reject(err);
      resolve(savedArticle);
    });
  })
    .then(savedArticle => res.status(201).json(savedArticle))
    .catch(error => res.status(500).json({ error: error.message }));
});

router.get('/articles', (req, res) => {
  new Promise((resolve, reject) => {
    Article.find((err, articles) => {
      if (err) return reject(err);
      resolve(articles);
    });
  })
    .then(articles => res.json(articles))
    .catch(error => res.status(500).json({ message: error.message }));
});

router.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
    if (err) return res.status(500).json({ error: err.message });

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    new Promise((resolve, reject) => {
      newUser.save((err, savedUser) => {
        if (err) return reject(err);
        resolve(savedUser);
      });
    })
      .then(savedUser => res.status(201).json(savedUser))
      .catch(error => res.status(500).json({ error: error.message }));
  });
});

router.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  new Promise((resolve, reject) => {
    User.findOne({ username }, (err, user) => {
      if (err) return reject(err);
      if (!user) return reject(new Error('User non trouvé'));
      resolve(user);
    });
  })
    .then(user => {
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) return res.status(500).json({ message: 'Erreur serv' });
        if (isMatch) { 
          const token = jwt.sign(
            { _id: user._id, role: user.role },
            JWT_SECRET,
            { expiresIn: '1h' }
          );
          res.json({ token, user });
        } else {
          res.status(401).json({ message: 'Mdp incorrect' });
        }
      });
    })
    .catch(error => res.status(401).json({ message: error.message }));
});

module.exports = router;
