const express = require('express');

const Report = require('../models/ReportModel');
const User = require('../models/UserModel');

const router = express.Router();

router
  .get('/', (req, res) => {
    const { queryType, string } = req.query;
    const permittedFields = ['name'];
    if (permittedFields.indexOf(queryType) === -1) {
      return res.status(422).json({ message: `Invalid query. User can only GET by the following queryTypes: ${permittedFields.split(', ')}.`})
    }
    Report
      .findOne({ [queryType]: new RegExp('.*'+string+'.*', "i") })
      .then(report => {
        res.status(200).json(report);
      }).catch(err => res.status(500).json({ message: err.message }));
  })
  .post('/', async (req, res) => {
    const { productId, details, reactionLevel } = req.body;
    const { userId } = req.session;
    const user = await User.findById(userId);
    if (!user) {
        return res.status(401).json({ message: "Unauthorized."});
    }
    const newReport = new Report({
      productId,
      userId,
      details,
      reactionLevel,
      sensitivityIds: user.sensitivityIds
    });
    newReport.save()
      .then(savedReport => {
        res.status(200).json(savedReport);
      }).catch(err => res.status(500).json({ message: "Server error." }))
  });

module.exports = router;