const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    allergen: { type: mongoose.Schema.Types.ObjectId, ref: 'Allergen' },
    lightImmediate: { type: Number },
    moderateImmediate: { type: Number },
    severeImmediate: { type: Number },
    lightDelayed: { type: Number },
    moderateImmediate: { type: Number },
    severeImmediate: { type: Number },
});

module.exports = mongoose.model('Company', CompanySchema);