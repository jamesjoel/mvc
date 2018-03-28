var db = require('../config/config');
var connect = require('../config/connection');

module.exports.select=function(cb){
	connect.mongodb(function(err, client){
		var db = client.db(db.dbName);
		db.collection('student').find().toArray(cb);
	});
}
module.exports.selectWhere=function(age, cb){
	connect.mongodb(function(err, client){
		var db = client.db(db.dbName);
		db.collection('student').find({ age : {$gt : age }}).toArray(cb);
	});
}

module.exports.decAge=function(cb){
	connect.mongodb(function(err, client){
		var db = client.db(db.dbName);
		db.collection('student').find({ age : {$gt : 25 }}).sort({ age : -1}).toArray(cb);
	});
}