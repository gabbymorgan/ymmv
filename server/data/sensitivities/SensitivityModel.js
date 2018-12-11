const mongoose = require('mongoose');

const User = require('../users/UserModel');

const SensitivitySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    allergen: { type: String },
    sensitivityLevel: { type: String, enum: ['light', 'moderate'] },
});

SensitivitySchema.pre('save', async function() {
    await User.findByIdAndUpdate(this.userId, {
        $push: { sensitivityIds: this._id },
    });
})

module.exports = mongoose.model('Sensitivity', SensitivitySchema);