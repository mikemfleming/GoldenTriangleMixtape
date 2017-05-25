const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const mediaSchema = mongoose.Schema({
  user: String,
  link: {type: String, index: true, unique: true}, // unique: http://mongoosejs.com/docs/2.7.x/docs/schematypes.html
  time: Number,
}, { timestamps: true });

mediaSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Media', mediaSchema);
