const mongoose = require('mongoose');
const fs = require('fs');

const User = require('../../data/users/UserModel');

const users = JSON.parse(fs.readFileSync('./server/tests/users/users.json'));
const dbUrl = process.env.NODE_ENV === 'production'
  // need new DB URL for project
  ? ``
  : 'mongodb://localhost:27017/ymmv';

mongoose
  .connect(dbUrl)
  .then(async () => {
    console.log('\n=== Connected to MongoDB ===\n');
    await users.forEach(user => {
      const truncatedDescription = user.description.slice(0, 255);
      fixedUser = Object.assign(user, { description: truncatedDescription })
      newUser = new User(user);
      newUser.save();
    });
    mongoose.disconnect();
  })
  .catch(err => console.log('database conection failed', err));

