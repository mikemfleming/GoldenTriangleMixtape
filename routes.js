const mediaController = require('./controllers/mediaController.js');

module.exports = function (app, io) {

  app.post('/api/media/submit', mediaController.submit);

  // data retrieval
  app.get('/api/media/day', mediaController.getLastDay);
  app.get('/api/media/week', mediaController.getLastWeek);
  app.get('/api/media/month', mediaController.getLastMonth);
  app.get('/api/media/year', mediaController.getLastYear);

  // Socket.io
  // io.on('connection', function(socket){
  //   console.log('a user connected');
  //   socket.on('disconnect', function(){
  //     console.log('user disconnected');
  //   });
  // });
};
