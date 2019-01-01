const mongoose = require('mongoose');
const Company = require('./Company');

const ProductContract = require('../contracts/ProductContract');

const ProductSchema = new mongoose.Schema(ProductContract);

ProductSchema.pre('save', async function() {
    console.log(this.companyName)
    const company = await Company.findOne({name: this.companyName});
    console.log(company);
    this.companyId = company._id;
    company.productIds.push(this._id);
    await company.save();
});

module.exports =  mongoose.model('Product', ProductSchema);