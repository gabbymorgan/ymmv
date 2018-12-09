const  mongoose = require('mongoose');
const fs = require('fs');

const Product = require('../data/products/ProductModel');
const Company = require('../data/companies/CompanyModel');

const products = JSON.parse(fs.readFileSync('./server/data/products/products.json'));
const dbUrl = process.env.NODE_ENV === 'production'
  // need new DB URL for project
  ? ``
  : 'mongodb://localhost:27017/ymmv';

mongoose
  .connect(dbUrl)
  .then(async () => {
    console.log('\n=== Connected to MongoDB ===\n');
    const companies = await Company.find().limit(products.length);
    companies.forEach(async (company, index) => {
        const product = products[index];
        const truncatedDescription = product.description.slice(0,255);
        fixedProduct = Object.assign(product, { description: truncatedDescription, company: company._id })
        newProduct = new Product(product);
        await newProduct.save();
    });
  })
  .catch(err => console.log('database conection failed', err));
