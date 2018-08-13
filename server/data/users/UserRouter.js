const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const secret = process.env.SECRET_KEY;
const User = require('../employer/employerModel');

const EXPIRATION = 1000 * 60 * 60 * 12;
const router = express.Router();

router
  .post('/register', (req, res) => {
    const details = req.body;
    const user = new User({ ...details })
    user
      .save()
      .then((profile) => {
        const payload = {
          exp: Date.now() + EXPIRATION,
          sub: user._id,
        };
        const token = jwt.sign(payload, secret);
        return res.status(200).json({ profile, token });
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
            const payload = {
              exp: Date.now() + EXPIRATION,
              sub: user._id,
            };
            const token = jwt.sign(payload, secret);
            return res.json({ user, token });
          })
          .catch(err => res.status(500).json(err));
      })
      .catch(err => res.status(500).json(err));
  })
  .get('/profile', passport.authenticate('bearer', { session: false }), (req, res) => {
    const { user } = req;
    res.status(200).json({ user });
  });
  