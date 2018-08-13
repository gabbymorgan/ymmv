const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true, maxlength: 64 },
    lastName: { type: String, required: true, maxlength: 64 },
    email: { type: String, required: true },
    summary: { type: String, maxlength: 256 },
    sensitivities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Sensitivity' }],
    password: { type: String, minlength: 8 },
});

UserSchema.pre('save', function hashPassword(next) {
    bcrypt.hash(this.password, 13, (err, hash) => {
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

module.exports = mongoose.model('User', UserSchema);