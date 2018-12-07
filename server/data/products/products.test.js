const  mongoose = require('mongoose');
const fs = require('fs');

const Product = require('./ProductModel');

const products = JSON.parse(fs.readFileSync('./server/data/products/products.json'));
const dbUrl = process.env.NODE_ENV === 'production'
  // need new DB URL for project
  ? ``
  : 'mongodb://localhost:27017/ymmv';

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log('\n=== Connected to MongoDB ===\n');
    products.forEach(product => {
        const truncatedDescription = product.description.slice(0,255);
        fixedProduct = Object.assign(product, { description: truncatedDescription })
        newProduct = new Product(product);
        newProduct.save();
    });
  })
  .catch(err => console.log('database conection failed', err));
