const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    name: { type: String, required: true, maxLength: 128 },
    description: { type: String, required: true, maxlength: 256 },
    email: { type: String },
    url: { type: String },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
});

module.exports = mongoose.model('Company', CompanySchema);