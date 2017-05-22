// requirements
const Media  = require('./models/media.js');
const moment = require('moment');
const ObjectId = require('mongodb').ObjectID;

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

  app.get('/api/media/day', (req, res) => {
    
    // get posts from the last day sorted by recent
    const allMedia = Media.find({
      _id: { $gt: ObjectId.createFromTime(Date.now() / 1000 - 24 * 60 * 60) }
    }).sort({ createdAt: 1 });

    allMedia.exec((err, data) => {
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
