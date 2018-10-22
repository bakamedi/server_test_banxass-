const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
  connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
};

//const serverString = 'mongodb://localhost:27017/appbanaxass'
const serverString = 'mongodb://admin:admin123456@ds135993.mlab.com:35993/appbanaxass';

//Connection
module.exports = function(){
  const db = mongoose.connect(serverString, options, function(err){
    if (err) {
      console.log("Error de Conexión");
    } else {
      console.log("Conexión Establecida");
    }
  });

  return db;
};