var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  CLIENT:{
    type: String,
    unique: true
  },
  USER: 	  String,
  PASSWORD: String,
  TYPE:     String,
  ACTIVE: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('User', UserSchema);