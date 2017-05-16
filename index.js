var express    = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path       = require('path');
var browserify = require('browserify-middleware');
var routes     = express.Router();
var bodyParser = require('body-parser');

var assetFolder = path.join(`${__dirname}/client/public`);
app.use(express.static(assetFolder));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/', (req, res) => {
  res.sendFile(`${assetFolder}/index.html`);
});

app.use('/app-bundle.js', 
  browserify('./client/src/main.js', {
    'transform': [['babelify', {'presets': ['es2015', 'react']}]]
  })
);

app.post('/api/submit', (req, res) => {
  console.log('$$$$$$$$$$', req.body)
  res.end()
})

io.on('connection', function(socket){
  console.log('a user connected');
});

var port = process.env.PORT || 8080;
http.listen(port);
console.log(`listening on localhost: ${port}`);
