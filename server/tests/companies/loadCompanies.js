const mongoose = require('mongoose');
const fs = require('fs');

const Company = require('../../data/models/Company');

const companies = JSON.parse(fs.readFileSync('./server/tests/companies/companies.json'));
const dbUrl = process.env.NODE_ENV === 'production'
  // need new DB URL for project
  ? ``
  : 'mongodb://localhost:27017/ymmv';

mongoose
  .connect(dbUrl)
  .then(async () => {
    console.log('\n=== Connected to MongoDB ===\n');
    const loadCompanies = companies.map(async (company) => {
      const truncatedDescription = company.description.slice(0, 255);
      fixedCompany = Object.assign(company, { description: truncatedDescription })
      newCompany = new Company(company);
      await newCompany.save();
    });
    await Promise.all(loadCompanies);
    mongoose.disconnect();
  })
  .catch(err => console.log('database conection failed', err));
