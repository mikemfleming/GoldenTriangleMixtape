const Media  = require('../models/media.js');
const ObjectId = require('mongodb').ObjectID;

// times
const currentDateObj = new Date();
const yesterday = ObjectId.createFromTime(new Date().setDate(currentDateObj.getDate()-1));
const lastWeek = ObjectId.createFromTime(new Date().setDate(currentDateObj.getDate()-7));
const lastMonth = ObjectId.createFromTime(new Date().setDate(currentDateObj.getDate()-7*52));
const lastYear = ObjectId.createFromTime(new Date().setYear(currentDateObj.getFullYear()-1));
const theBeginningOfTime = 0;

// data retrieval
exports.getLastDay = getAllSince(yesterday);
exports.getLastWeek = getAllSince(lastWeek);
exports.getLastMonth = getAllSince(lastMonth);
exports.getLastYear = getAllSince(lastYear);
exports.getAll = getAllSince(theBeginningOfTime);

// submissions handler
exports.submit = (req, res) => {
  const newMedia = new Media({ media: { user: req.body.user_name, link: req.body.text }});
  newMedia.save((err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    //io.emit('media-submit', data);
    res.end(JSON.stringify(data));
  });
};

/////////////////
// V HELPERS V //
/////////////////

function getAllSince(time) {
  return (req, res) => {
    const mediaOfDay = Media.find({ _id: { $gt: time } })
    .sort({ createdAt: -1 });

    mediaOfDay.exec((err, data) => {
      if (err) {
        console.log(err);
        res.send(500);
      }
      res.end(JSON.stringify(data));
    }); 
  }
}
