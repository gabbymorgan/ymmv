const mongoose = require('mongoose');

const Company = require('../companies/CompanyModel');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true, maxLength: 128, index: true },
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
    companyName: { type: String },
    description: { type: String, required: true, maxlength: 256 },
    ingredients: [{ type: String, maxlength: 64 }],
    ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Rating' }],
});

ProductSchema.pre('save', async function() {
    const company = await Company.findById(this.company);
    this.companyName = company.name;
    company.products.push(this._id);
    await company.save();
});

module.exports = mongoose.model('Product', ProductSchema);