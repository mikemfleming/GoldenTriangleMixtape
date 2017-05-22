// requirements
const Media  = require('./models/media.js');

// begin routes
module.exports = function (app, io) {

  app.post('/api/media/submit', (req, res) => {
    const newMedia = new Media({ media: { user: req.body.user_name, link: req.body.text }});

    io.emit('media-submit', req.body);

    newMedia.save((err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      }
      res.end(JSON.stringify(data));
    });
  });

  app.get('/api/media/all', (req, res) => {
    const allMedia = Media.find();

    allMedia.exec((err, data) => {
      if (err) {
        console.log(err);
        res.send(500);
      }
      console.log('$$$$$$$$$$$$$$$$$', typeof data)
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
