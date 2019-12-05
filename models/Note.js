var mongoose = require("mongoose");

// Schema class using mongoose's schema method
var Schema = mongoose.Schema;

var noteSchema = new Schema({
  // The headline is the article associated with the note
  _headlineId: {
    type: Schema.Types.ObjectId,
    ref: "Headline"
  },
  // date is just a string
  date: {
    type: Date,
    default: Date.now
  },
  // note is just a string
  noteText: String
});

// Note model using the noteSchema
var Note = mongoose.model("Note", noteSchema);

module.exports = Note;
