const mongoose = require('mongoose');
const Company = require('./Company');

const ProductContract = require('../contracts/ProductContract');

const ProductSchema = new mongoose.Schema(ProductContract);

ProductSchema.pre('save', async function() {
    let {ingredients, companyName } = this;
    if (ingredients[0].indexOf(',') !== -1) {
        ingredients = ingredients[0].split(/, */);
        this.ingredients = ingredients;
    }
    const company = await Company.findOne({name: companyName});
    this.companyId = company._id;
    company.productIds.push(this._id);
    await company.save();
});

module.exports =  mongoose.model('Product', ProductSchema);