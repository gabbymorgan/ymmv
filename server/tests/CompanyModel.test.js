const  mongoose = require('mongoose');
const fs = require('fs');

const Company = require('../data/companies/CompanyModel');

const companies = JSON.parse(fs.readFileSync('./server/data/companies/companies.json'));
const dbUrl = process.env.NODE_ENV === 'production'
  // need new DB URL for project
  ? ``
  : 'mongodb://localhost:27017/ymmv';

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log('\n=== Connected to MongoDB ===\n');
    companies.forEach(company => {
        const truncatedDescription = company.description.slice(0,255);
        fixedCompany = Object.assign(company, { description: truncatedDescription })
        newCompany = new Company(company);
        newCompany.save();
    });
  })
  .catch(err => console.log('database conection failed', err));
