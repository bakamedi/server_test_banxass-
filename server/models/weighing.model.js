var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WeighingSchema = new Schema({
  WEIGHT:           Number,
  CODE_PACKAGING:   String,
  CODE_TAG:         String,
  REGISTER_DATE:    Date,
});

module.exports = mongoose.model('Weighing', WeighingSchema);