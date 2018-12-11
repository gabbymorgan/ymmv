const express = require('express');

const Company = require('./CompanyModel');

const router = express.Router();

router
  .get('/', (req, res) => {
    const { queryType, string } = req.query;
    const permittedFields = ['name'];
    if (permittedFields.indexOf(queryType) === -1) {
      return res.status(422).json({ message: "Invalid query. User can only GET by 'name' or 'companyName'."})
    }
    Company
      .findOne({ [queryType]: new RegExp('.*'+string+'.*', "i") })
      .then(company => {
        res.status(200).json(company);
      }).catch(err => res.status(500).json({ message: err.message }));
  })
  .post('/', (req, res) => {
    const { name, email, description, url } = req.body;
    const newCompany = new Company({
      name,
      email,
      description,
      url,
    });
    newCompany.save()
      .then(savedCompany => {
        res.status(200).json(savedCompany);
      }).catch(err => res.status(500).json({ message: err.message }))
  });

module.exports = router;