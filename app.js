/* eslint global-require: 0 */
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const server = require('./server/server');

const configDBUSER = process.env.DB_USER;
const configDBPASS = process.env.DB_PASS;

server.use(express.static(path.join(__dirname, 'client/build')));
server
  .get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/build/index.html`));
  });

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


const port = process.env.PORT || 5000;
server.listen(port);
console.log(`Server/app/index is running ${port}`);