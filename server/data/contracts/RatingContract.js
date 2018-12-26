const mongoose = require('mongoose');

module.exports = {
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  allergen: { type: String },
  light: {
      sum: { type: Number, default: 0 },
      sampleSize: { type: Number, default: 0 },
      average: { type: Number, max: 5, default: 0 },
  },
  moderate: {
      sum: { type: Number, default: 0 },
      sampleSize: { type: Number, default: 0 },
      average: { type: Number, max: 5, default: 0 },
  },
};