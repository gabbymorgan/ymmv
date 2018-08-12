const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true, maxlength: 64 },
    lastName: { type: String, required: true, maxlength: 64 },
    email: { type: String, required: true },
    summary: { type: String, maxlength: 256 },
    sensitivities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Sensitivity' }],
});

module.exports = mongoose.model('User', UserSchema);