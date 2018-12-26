const express = require('express');
const Rating = require('../models/Rating');

const router = express.Router();

router
  .get('/', (req, res) => {
    const { queryType, string } = req.query;
    Rating
      .find({ [queryType]: new RegExp('.*'+string+'.*', "i") })
      .then(products => {
        res.status(200).json(products);
      }).catch(err => res.status(500).json({ message: err.message }));
  })
  .post('/', (req, res) => {
    const { name, company, description, ingredients } = req.body;
    const newRating = new Rating({
      name,
      company,
      description,
      ingredients,
    });
    newRating.save()
      .then(savedRating => {
        res.status(200).json(savedRating);
      }).catch(err => res.status(500).json({ message: "Server error." }))
  });

module.exports = router;