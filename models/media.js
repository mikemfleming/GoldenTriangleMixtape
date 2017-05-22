const mongoose = require('mongoose');

const mediaSchema = mongoose.Schema({
  media: {
    user: String,
    link: String,
  }
});

module.exports = mongoose.model('Media', mediaSchema);
