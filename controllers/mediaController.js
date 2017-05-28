const Media = require('../models/media.js');
const ObjectId = require('mongodb').ObjectID;
const Helpers = require('../helpers.js')

// Handle Submit
exports.submit = (req, res) => {
  const newMedia = new Media({
    user: req.body.user_name,
    link: req.body.text 
  });

  newMedia.save((err, data) => {
    !!err
      ? res.status(500).send(Helpers.handleMongoErrors(err))
      : res.end(JSON.stringify(data));
  });
};

// Request Helper Function
function getAllSince(time) {
  return (req, res) => {
    const media = Media.find({_id: {$gte: time} })
      .sort({ createdAt: -1 })

    media.exec((err, data) => {

      const cards = data.map(o => {
        const copy = {};
        copy.id = o._id;
        copy.link = o.link;
        copy.user = o.user;
        copy.time = o.time;
        return copy;
      });

      console.log(cards)
      
      !!err
        ? res.sendStatus(500)
        : res.end(JSON.stringify(cards));
    }); 
  }
}

// Time Generators
const yesterday = () => ObjectId.createFromTime((Date.now() / 1000) - (24*60*60));
const lastWeek  = () => ObjectId.createFromTime(new Date().setDate(new Date().getDate()-7));
const lastMonth = () => ObjectId.createFromTime(new Date().setDate(new Date().getDate()-7*52));
// const lastYear  = () => ObjectId.createFromTime(new Date().setYear(new Date().getFullYear()-1));

// Data Retrieval
exports.getLastDay    = getAllSince( yesterday()  );
exports.getLastWeek   = getAllSince( lastWeek()   );
exports.getLastMonth  = getAllSince( lastMonth()  );
// exports.getLastYear   = getAllSince( lastYear()   );
