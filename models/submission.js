const mongoose = require('mongoose');

const submissionSchema = mongoose.Schema({
  submission: {
    user: String,
    link: String,
  }
});

module.exports = mongoose.model('Submission', submissionSchema);
