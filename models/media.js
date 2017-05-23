const mongoose = require('mongoose');

const mediaSchema = mongoose.Schema({
  media: {
    user: String,
    link: String,
    time: Number,
  }
}, { timestamps: true });

module.exports = mongoose.model('Media', mediaSchema);
