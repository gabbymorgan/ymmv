// node modules
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const passport = require('passport');
const morgan = require('morgan');

// local files
const strategies = require('./server/constants/strategies');
const UserRouter = require('./server/users/UserRouter');

const server = express();

const originUrl = process.env.NODE_ENV === 'production'
  ? 'https:ymmv-mern.herokuapp.com' : 'http://localhost:3000';

const corsOptions = {
  origin: (originUrl),
  credentials: true,
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
server.use(morgan());
server.use(express.json());
server.use(cors(corsOptions));
server.use(helmet());
server.use(passport.initialize());
server.use(passport.session());

strategies();


// routes begin
server.use('/api/users', UserRouter);
// routes end

module.exports = server;