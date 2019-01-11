const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserContract = require('../contracts/User');

const UserSchema = new mongoose.Schema(UserContract);

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