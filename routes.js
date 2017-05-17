const Submissions = require('./models/submissions.js');
const path        = require('path');
const assetFolder = path.join(`${__dirname}/client/public`);

module.exports = function (app, io) {

  // HOME PAGE
  app.get('/', (req, res) => {
    res.sendFile(`${assetFolder}/index.html`);
  });

  io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
  });

  app.post('/api/submit', (req, res) => {
    io.emit('submission', req.body)
    const submission = new Submissions({ submission: { user: req.body.user_name, link: req.body.text }})
    submission.save((err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      }
      res.end(JSON.stringify(data))
    });
    console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$', req.body)
    res.end()
  })

  app.get('/api/submissions', (req, res) => {
    // build query
    const submissions = Submissions.find()

    // execute and send
    submissions.exec((err, data) => {
      if (err) {
        console.log(err);
        res.send(500);
      }
      res.end(JSON.stringify(data))
    });
  });
};
