const mongoose = require('mongoose');
const User = require('./User');
const SensitivityContract = require('../contracts/SensitivityContract');

const SensitivitySchema = new mongoose.Schema(SensitivityContract);

SensitivitySchema.pre('save', async function() {
    await User.findByIdAndUpdate(this.userId, {
        $push: { sensitivityIds: this._id },
    });
})

module.exports = mongoose.model('Sensitivity', SensitivitySchema);