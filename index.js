// establish env variables before anything else
require('dotenv').config({ path: 'variables.env' });

// requirements
const express = require('express');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const browserify = require('browserify-middleware');
const routes = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const configDB = require('./config/database.js');
const assetFolder = path.join(`${__dirname}/client/public`);

// set mongoose's promise lib to native es6
mongoose.Promise = global.Promise;

// all requests have access to index.html and styles.css
app.use(express.static(assetFolder));

// parse requests
app.use(bodyParser.json());

// parse slack
app.use(bodyParser.urlencoded({extended: false}));

// mongoDB connect
mongoose.connect(configDB.url);

// send homepage to index.html
app.get('/', (req, res) => {
  res.sendFile(`${assetFolder}/index.html`);
});

// script tag on index.html asks for browserify
app.get('/bundle.js', (req, res) => {
  res.sendFile(`${__dirname}/dist/bundle.js`)
});

// configure app with routes
require('./routes.js')(app, io);

// server init
const port = process.env.PORT || 8080;
http.listen(port);
console.log(`listening on localhost: ${port}`);
