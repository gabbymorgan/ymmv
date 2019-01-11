const mongoose = require('mongoose');
const fs = require('fs');

const Product = require('../../data/models/Product');
const Company = require('../../data/models/Company');

const products = JSON.parse(fs.readFileSync('./server/tests/products/products.json'));
const dbUrl = process.env.NODE_ENV === 'production'
  // need new DB URL for project
  ? ``
  : 'mongodb://localhost:27017/ymmv';

mongoose
  .connect(dbUrl)
  .then(async () => {
    console.log('\n=== Connected to MongoDB ===\n');
    const company = await Company.find().limit(products.length);
    const loadCompany = company.map(async (company, index) => {
      const product = products[index];
      const truncatedDescription = product.description.slice(0, 255);
      const randomDimenion = () => Math.trunc(Math.random() * 100) * 10;
      const randomWidth = randomDimenion();
      const randomHeight = randomDimenion();
      const imageUrl = `https://picsum.photos/${randomWidth}/${randomHeight}`
      fixedProduct = Object.assign(product, { description: truncatedDescription, imageUrl, companyName: company.name })
      newProduct = new Product(product);
      await newProduct.save();
    });
    await Promise.all(loadCompany);
    mongoose.disconnect();
  })
  .catch(err => console.log('database conection failed', err));
