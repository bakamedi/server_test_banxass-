var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SessionSchema = new Schema({
  NAME:           String,
  START_DATE:     Date,
  END_DATE: 	    Date,
  TYPE:           String
});

module.exports = mongoose.model('Session', SessionSchema);