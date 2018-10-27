var jwt     = require('jsonwebtoken');
var config  = require('../config/config');

var json = {
  decoded: false
}

exports.VerifyToken = function(token, callback){
    jwt.verify(token, config.security.ApiKey , function(err, decoded) {
      if(err){
        console.log(" hay error");
        callback(err);
      }
      if(decoded){
        json.decoded = true;
        //console.log(JSON.stringify(json));
        callback(json);
      }
    });
}

exports.CreateToken = function(resultId, callback){
  try {
    var token = jwt.sign({
      token: resultId
      }, config.security.ApiKey );
      callback(token); 
  } catch (error) {
    callback(error);
  }
}