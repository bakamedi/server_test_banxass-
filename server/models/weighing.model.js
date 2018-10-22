var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WeighingSchema = new Schema({
  SESSION:        String,
  WEIGHT:         Number,
  CODE_LABEL: 	  String,
  REGISTER_DATE:  Date,
  PACKING_CODE:   String
});

module.exports = mongoose.model('Weighing', WeighingSchema);