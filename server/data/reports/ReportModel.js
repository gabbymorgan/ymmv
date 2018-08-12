const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    details: { type: String, required: true, maxlength: 256 },
});

module.exports = mongoose.model('Report', ReportSchema);