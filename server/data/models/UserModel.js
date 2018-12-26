const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    firstName: { type: String, maxlength: 64 },
    lastName: { type: String, maxlength: 64 },
    email: { type: String, required: true },
    description: { type: String, maxlength: 256 },
    sensitivityIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Sensitivity' }],
    password: { type: String, minlength: 8, required: true },
    signUpDate: { type: Date, default: Date.now },
});

UserSchema.pre('save', function hashPassword(next) {
  bcrypt.hash(this.password, 10, (err, hash) => {
    if (err) {
      return next(err);
    }
    this.password = hash;
    return next();
  });
});
  
UserSchema.methods.validify = function (passwordGuess) {
  return bcrypt.compare(passwordGuess, this.password);
};
 
module.exports = mongoose.model('User', UserSchema);