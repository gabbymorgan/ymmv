const mongoose = require('mongoose');

module.exports = {
  firstName: { type: String, maxlength: 64, inputType: 'text' },
  lastName: { type: String, maxlength: 64, inputType: 'text' },
  email: { type: String, required: true, inputType: 'email' },
  description: { type: String, maxlength: 256, inputType: 'textarea' },
  sensitivityIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Sensitivity' }],
  password: { type: String, minlength: 8, required: true, inputType: 'password', validators: ['complex', 'minlength'] },
  signUpDate: { type: Date, default: Date.now },
};