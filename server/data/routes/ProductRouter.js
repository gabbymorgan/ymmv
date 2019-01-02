const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

router
  .get('/', (req, res) => {
    const { queryType, string } = req.query;
    const permittedFields = ['name', 'companyName'];
    if (permittedFields.indexOf(queryType) === -1) {
      return res.status(422).json({ message: "Invalid query. User can only GET by 'name' or 'companyName'."})
    }
    Product
      .find({ [queryType]: new RegExp('.*'+string+'.*', "i") })
      .populate('ratingIds')
      .then(products => {
        res.status(200).json(products);
      }).catch(err => res.status(500).json({ message: err.message }));
  })
  .post('/', (req, res) => {
    const { name, companyName, description, ingredients } = req.body;
    const newProduct = new Product({
      name,
      companyName,
      description,
      ingredients,
    });
    newProduct.save()
      .then(savedProduct => {
        res.status(200).json(savedProduct);
      }).catch(err => res.status(500).json({ message: err.message }))
  });

module.exports = router;