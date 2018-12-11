const mongoose = require('mongoose');
const fs = require('fs');

const Product = require('../../data/products/ProductModel');
const Report = require('../../data/reports/ReportModel');
const User = require('../../data/users/UserModel');

const reportsData = JSON.parse(fs.readFileSync('./server/tests/reports/reports.json'));

const dbUrl = process.env.NODE_ENV === 'production'
  // need new DB URL for project
  ? ``
  : 'mongodb://localhost:27017/ymmv';

mongoose
  .connect(dbUrl)
  .then(async () => {
    console.log('\n=== Connected to MongoDB ===\n');
    const products = await Product.find();
    const users = await User.find();
    const loadReports = reportsData.map(async (report) => {
      const { details, reactionLevel } = report;
      const truncatedDetails = details.slice(0, 255);
      const product = products[Math.floor(Math.random() * products.length)];
      const user = users[Math.floor(Math.random() * users.length)];
      newReport = new Report({
        productId: product._id,
        userId: user._id,
        sensitivityIds: user.sensitivityIds,
        details: truncatedDetails,
        reactionLevel
      });
      await newReport.save();
    });
    await Promise.all(loadReports);
    mongoose.disconnect();
  })
  .catch(err => console.log('database conection failed', err));
