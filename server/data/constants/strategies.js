const passport = require('passport');
const jwt = require('jsonwebtoken');
const BearerStrategy = require('passport-http-bearer').Strategy;
const secret = process.env.SECRET_KEY;
const User = require('../models/UserModel');

function strategies() {
  // serialize/deserialize seekers
  passport.serializeUser((seeker, done) => {
    done(null, seeker._id);
  });
  passport.deserializeUser((seekerId, done) => {
    Seeker.findById(seekerId, (err, user) => done(err, user));
  });

  // serialize/deserialize employers
  passport.serializeUser((employer, done) => {
    done(null, employer._id);
  });
  passport.deserializeUser((employerId, done) => {
    Employer.findById(employerId, (err, user) => done(err, user));
  });


  // strategy for handling requests for restricted endpoints
  // checks for JWT on Bearer token in Auth headers
  passport.use(new BearerStrategy((token, done) => {
    const { sub, userType, exp } = jwt.verify(token, secret);
    // check if expired
    if (exp <= Date.now()) {
      return done(null, false);
    }
    User
      .findById(sub) // search seekers
      .select('-password -createdOn -__v')
      .then((seeker) => {
        if (!seeker) {
          return done(null, false);
        }
        return done(null, seeker);
      }).catch(() => done(null, false));
  }));
}

module.exports = strategies;
