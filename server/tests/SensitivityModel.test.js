const  mongoose = require('mongoose');
const fs = require('fs');

const User = require('../data/users/UserModel');
const Sensitivity = require('../data/sensitivities/SensitivityModel');

const sensitivities = [{ allergen: 'corn', level: 'light' }, { allergen: 'wheat', level: 'moderate'} ]
const dbUrl = process.env.NODE_ENV === 'production'
  // need new DB URL for project
  ? ``
  : 'mongodb://localhost:27017/ymmv';

mongoose
  .connect(dbUrl)
  .then(async () => {
    console.log('\n=== Connected to MongoDB ===\n');
    const users = await User.find();
    users.forEach(async (user, index) => {
        const sensitivityData = sensitivities[(sensitivities.length - 1) % index];
        const { allergen, level } = sensitivityData;
        const newSensitivity = new Sensitivity({
            userId: user._id,
            allergen,
            level,
        });
        newSensitivity.save();
    });
  })
  .catch(err => console.log('database conection failed', err));
