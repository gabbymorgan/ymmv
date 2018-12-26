// node modules
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);

// local files
const UserRouter = require('./data/routes/UserRouter');
const ProductRouter = require('./data/routes/ProductRouter');
const ReportRouter = require('./data/routes/ReportRouter');
const CompanyRouter = require('./data/routes/CompanyRouter');
const SensitivityRouter = require('./data/routes/SensitvityRouter');

const server = express();

const dbUrl = process.env.NODE_ENV === 'production'
  // need new DB URL for project
  ? ``
  : 'mongodb://localhost:27017/ymmv';

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log('\n=== Connected to MongoDB ===\n');
  })
  .catch(err => console.log('database conection failed', err));

const originUrl = process.env.NODE_ENV === 'production'
  ? 'https://ymmv-mern.herokuapp.com' : 'http://localhost:3000';

const corsOptions = {
  origin: (originUrl),
  credentials: true,
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

server.use(session({
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  httpOnly: true,
  secure: true,
  sameSite: 'strict',
}));
server.use(morgan());
server.use(express.json());
server.use(cors(corsOptions));
server.use(helmet());
server.use(passport.initialize());
server.use(passport.session());


// routes begin
server.use('/api/users', UserRouter);
server.use('/api/products', ProductRouter);
server.use('/api/companies', CompanyRouter);
server.use('/api/reports', ReportRouter);
server.use('/api/sensitivities', SensitivityRouter);
// routes end

module.exports = server;