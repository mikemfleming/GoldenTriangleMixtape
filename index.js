var express    = require('express');
var app        = express();
var path       = require('path');
var browserify = require('browserify-middleware');
var routes     = express.Router();

var assetFolder = path.join(`${__dirname}/client/public`);
app.use(express.static(assetFolder));

app.get('/', (req, res) => {
  res.sendFile(`${assetFolder}/index.html`);
});

app.use('/app-bundle.js', 
  browserify('./client/src/main.js', {
    'transform': [['babelify', {'presets': ['es2015', 'react']}]]
  })
);

var port = process.env.PORT || 8080;
app.listen(port);
console.log(`listening on localhost: ${port}`);
