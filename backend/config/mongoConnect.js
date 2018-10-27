var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/planetrocket', { useNewUrlParser: true }, function(err, db) {
	if(err) {
		console.log(err);
	}
	});

module.exports = MongoClient;
