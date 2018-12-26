const mongoose = require('mongoose');

const Company = require('../models/CompanyModel');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true, maxLength: 128, index: true },
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
    companyName: { type: String },
    description: { type: String, required: true, maxlength: 256 },
    ingredients: [{ type: String, maxlength: 64 }],
    ratingIds: { type: mongoose.Schema.Types.ObjectId, ref: 'Rating' },
    imgUrl: {
        type: String,
        validate: {
            validator: function(url) {
                return /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,15}(:[0-9]{1,5})?(\/.*)?$/.test(url);
            }
        }
    }
});

ProductSchema.pre('save', async function() {
    const company = await Company.findById(this.company);
    this.companyName = company.name;
    company.products.push(this._id);
    await company.save();
});

module.exports = mongoose.model('Product', ProductSchema);