const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true, maxLength: 128 },
    company: { type: Object },
    description: { type: String, required: true, maxlength: 256 },
    ingredients: [{ type: String, maxlength: 64 }],
    ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Rating' }],
});

module.exports = mongoose.model('Product', ProductSchema);