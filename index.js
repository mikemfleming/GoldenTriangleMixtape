const express     = require('express');
const app         = require('express')();
const http        = require('http').Server(app);
const io          = require('socket.io')(http);
const path        = require('path');
const browserify  = require('browserify-middleware');
const routes      = express.Router();
const bodyParser  = require('body-parser');
const mongoose    = require('mongoose');
const configDB    = require('./config/database.js');
const assetFolder = path.join(`${__dirname}/client/public`);

// establish env variables
require('dotenv').config();

app.use(express.static(assetFolder));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect(configDB.url);

app.use('/app-bundle.js', 
  browserify('./client/src/main.js', {
    'transform': [['babelify', {'presets': ['es2015', 'react']}]]
  })
);

require('./routes.js')(app, io);

const port = process.env.PORT || 8080;
http.listen(port);
console.log(`listening on localhost: ${port}`);
