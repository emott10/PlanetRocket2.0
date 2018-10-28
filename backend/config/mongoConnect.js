var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/planetrocket',  { useNewUrlParser: true });

mongoose.Promise = global.Promise;

var db = mongoose.connection;
module.exports = db;
