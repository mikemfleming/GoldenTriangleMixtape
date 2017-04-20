const express = require('express');
const port = process.env.PORT || 8080;
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'app'))); // make app static

// launch ======================================================================
app.listen(port);
console.log(`Mixtape is dancin' on port ${port}`);
