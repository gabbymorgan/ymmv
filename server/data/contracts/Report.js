const mongoose = require('mongoose');

module.exports = {
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  sensitivityIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Sensitivity', required: true }],
  sensitivities: { type: Object },
  details: { type: String, maxlength: 512, inputType: 'textarea'},
  reactionLevel: { type: Number, max: 5, required: true, inputType: 'select'},
};