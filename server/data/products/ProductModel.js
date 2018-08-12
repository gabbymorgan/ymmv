const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true, maxLength: 128 },
    company: { type: mongoose.Schema.Types.ObjectId },
    description: { type: String, required: true, maxlength: 256 },
    reports: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Report' }],
    
});

module.exports = mongoose.model('Product', ProductSchema);