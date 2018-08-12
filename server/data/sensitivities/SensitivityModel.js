const mongoose = require('mongoose');

const SensitivitySchema = new mongoose.Schema({
    ingredient: { type: String, required: true, maxLength: 64 },
    description: { type: String, required: true, maxlength: 256 },
    sensitvity: { type: String, enum: ['light', 'moderate', 'severe'] },
});

module.exports = mongoose.model('Sensitivity', SensitivitySchema);