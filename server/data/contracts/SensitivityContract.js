const mongoose = require('mongoose');

module.exports = {
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  allergen: { type: String, inputType: 'text' },
  sensitivityLevel: { type: String, enum: ['light', 'moderate'], inputType: 'select' },
};