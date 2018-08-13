const express = require('express');
const passport = require('passport');

const User = require('../employer/employerModel');

const router = express.Router();

router
  .post('/register', (req, res) => {
    const details = req.body;
    const newUser = new User({ ...details })
    newUser
      .save()
      .then((user) => {
        res.status(200).json({ user })
      })
      .catch((err) => {
        res.status(500).json({ message: err.message });
      });
  })
  .post('/login', (req, res) => {
    const { email, password } = req.body;
    user.findOne({ email })
      // check if password matches
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
            res.status(200).json({ user })
          }).catch(err => res.status(500).json(err));
      }).catch(err => res.status(500).json(err));
  }).get('/profile', passport.authenticate('bearer', { session: false }), (req, res) => {
    const { user } = req;
    res.status(200).json({ user });
  });
  