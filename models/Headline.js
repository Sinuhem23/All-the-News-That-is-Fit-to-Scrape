var mongoose = require("mongoose");

// Schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the headlinesSchema with our schema class
var headlineSchema = new Schema({
  // healin, a string, must be entered
  headline: {
    type: String,
    required: true,
    unique: {
      index: { unique: true }
    }
  },
  // summary, a string, must be entered
  summary: {
    type: String,
    required: true
  },
  // url, a string, must be entered
  url: {
    type: String,
    required: true
  },
  // date is just a string
  date: {
    type: Date,
    default: Date.now
  },
  saved: {
    type: Boolean,
    default: false
  }
});

// Headline model using the headlineSchema
var Headline = mongoose.model("Headline", headlineSchema);

module.exports = Headline;
