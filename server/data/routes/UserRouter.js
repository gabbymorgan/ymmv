const express = require('express');
const passport = require('passport');

const User = require('../models/UserModel');

const router = express.Router();

passport.serializeUser(function (user, done) {
  done(null, user._id);
});

passport.deserializeUser(function (user, done) {
  User.findById(id, function (err, user) {
      done(err, user);
  });
});

router
  .post('/register', (req, res) => {
    const details = req.body;
    const newUser = new User({ ...details });
    newUser
      .save()
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((err) => {
        res.status(500).json({ message: err.message });
      });
  })
  .post('/login', (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email })
      .then((user) => {
        if (!user) {
          return res.status(400).json({ message: 'user record not found.' });
        }
        user
          .validify(password)
          .then((passwordIsValid) => {
            if (!passwordIsValid) {
              return res.status(401).json({ message: 'Bad credentials.' });
            }
            req.session.userId = user._id;
            res.status(200).json(user);
          }).catch(err => res.status(500).json(err));
      }).catch(err => res.status(500).json(err));
  })
  .get('/profile', (req, res) => {
    const { userId } = req.session;
    User
      .findById(userId)
      .populate('sensitivityIds')
      .then(user => {
        if (!user) {
          res.status(401).json({ message: "Unauthorized." });
        }
        res.status(200).json(user);
      }).catch(err => {
        res.status(500).json(err);
      })
  })
  .get('/', (req, res) => {
    res.status(200).json({ message: "At least this part is working!" })
  })
  

module.exports = router;