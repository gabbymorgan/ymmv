// node modules
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const uuid = require('uuid/v4');
const MongoStore = require('connect-mongo')(session);

// local files
const UserRouter = require('./data/users/UserRouter');

const server = express();
const dbUrl = process.env.NODE_ENV === 'production'
  // need new DB URL for project
  ? ``
  : 'mongodb://localhost:27017/ymmv';
const originUrl = process.env.NODE_ENV === 'production'
  ? 'https://ymmv-mern.herokuapp.com' : 'http://localhost:3000';
const corsOptions = {
  origin: (originUrl),
  credentials: true,
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

server.use(session({
  store: new MongoStore({ url: dbUrl }),
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  httpOnly: true,
}));
server.use(morgan());
server.use(express.json());
server.use(cors(corsOptions));
server.use(helmet());
server.use(passport.initialize());
server.use(passport.session());


// routes begin
server.use('/api/users', UserRouter);
// routes end

module.exports = server;