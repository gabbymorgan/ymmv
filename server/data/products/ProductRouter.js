const express = require('express');

const Product = require('./ProductModel');

const router = express.Router();

router
  .get('/', (req, res) => {
    const { queryType, string } = req.query;
    Product
      .find({ [queryType]: new RegExp('.*'+string+'.*', "i") })
      .then(products => {
        res.status(200).json(products);
      }).catch(err => res.status(500).json({ message: err.message }));
  });



module.exports = router;