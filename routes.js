const Submission  = require('./models/submission.js');
const path        = require('path');
const assetFolder = path.join(`${__dirname}/client/public`);

module.exports = function (app, io) {

  // Home Page, relay to asset folder
  app.get('/', (req, res) => {
    res.sendFile(`${assetFolder}/index.html`);
  });
  

  app.post('/api/submit', (req, res) => {
    const submission = new Submission({ submission: { user: req.body.user_name, link: req.body.text }});

    io.emit('submission', req.body);

    submission.save((err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      }
      res.end(JSON.stringify(data));
    });
  });

  app.get('/api/submission', (req, res) => {
    const submissions = Submission.find();

    submissions.exec((err, data) => {
      if (err) {
        console.log(err);
        res.send(500);
      }
      res.end(JSON.stringify(data));
    });
  });

  // Socket.io
  io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
  });
};
