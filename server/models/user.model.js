var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  CLIENT:{
    type: String,
    unique: true
  },
  USER: 	String,
  PASSWORD: String
});

module.exports = mongoose.model('User', UserSchema);