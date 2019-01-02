const mongoose = require('mongoose');

module.exports = {
  firstName: { type: String, maxlength: 64, inputType: 'text', required: true },
  lastName: { type: String, maxlength: 64, inputType: 'text', required: true},
  email: { type: String, inputType: 'email', required: true },
  description: { type: String, maxlength: 256, inputType: 'textarea' },
  sensitivityIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Sensitivity' }],
  password: { type: String, minlength: 8, inputType: 'password', validators: ['complex', 'minlength'], required: true },
  signUpDate: { type: Date, default: Date.now },
};