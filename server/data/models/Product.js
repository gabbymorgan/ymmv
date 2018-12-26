const mongoose = require('mongoose');
const Company = require('./Company');

const ProductContract = require('../contracts/ProductContract');

const ProductSchema = new mongoose.Schema(ProductContract);

ProductSchema.pre('save', async function() {
    const company = await Company.findById(this.company);
    this.companyName = company.name;
    company.products.push(this._id);
    await company.save();
});

module.exports =  mongoose.model('Product', ProductSchema);