var express    = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path       = require('path');
var browserify = require('browserify-middleware');
var routes     = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var configDB = require('./config/database.js');

var assetFolder = path.join(`${__dirname}/client/public`);
app.use(express.static(assetFolder));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

mongoose.connect(configDB.url);

app.use('/app-bundle.js', 
  browserify('./client/src/main.js', {
    'transform': [['babelify', {'presets': ['es2015', 'react']}]]
  })
);

// io.on('connection', function(socket){
//   console.log('a user connected');
//   socket.on('disconnect', function(){
//     console.log('user disconnected');
//   });
// });

// app.post('/api/submit', (req, res) => {
//   io.emit('submission', req.body)
//   console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$', req.body)
//   res.end()
// })

require('./routes.js')(app, io);

var port = process.env.PORT || 8080;
http.listen(port);
console.log(`listening on localhost: ${port}`);
