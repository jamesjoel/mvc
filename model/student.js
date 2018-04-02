var config = require('../config/config');
var connect = require('../config/connection');

var mongodb = require('mongodb');

module.exports.selectAll=function(cb){
	connect.mongodb(function(err, client){
		var db = client.db(config.dbName);
		db.collection('student').find().toArray(cb);
	});
}
module.exports.selectWhere=function(age, cb){
	connect.mongodb(function(err, client){
		var db = client.db(config.dbName);
		db.collection('student').find({ age : {$gt : age }}).toArray(cb);
	});
}

module.exports.decAge=function(cb){
	connect.mongodb(function(err, client){
		var db = client.db(config.dbName);
		db.collection('student').find({ age : {$gt : 25 }}).sort({ age : -1}).toArray(cb);
	});
}

module.exports.insert=function(obj, cb){
	connect.mongodb(function(err, client){
		var db = client.db(config.dbName);
		db.collection('student').insert(obj, cb);
	});
}

module.exports.deleteWhereId=function(data, cb){
	var objectId = new mongodb.ObjectID(data._id); // create object id like mongodb not only "_id" its like "objectID(....)"
	connect.mongodb(function(err, client){
		var db = client.db(config.dbName);
		db.collection('student').deleteOne({ _id : objectId }, cb);
	});
}


module.exports.updateWhereId=function(data, cb){

	var a = new mongodb.ObjectID(data._id);
	delete data._id;
	
	// console.log(newData);
	//var objectId = new mongodb.ObjectID(data._id); // create object id like mongodb not only "_id" its like "objectID(....)"
	connect.mongodb(function(err, client){
		var db = client.db(config.dbName);
		// db.collection('student').updateOne({ _id : a}, {$set : data}, { upsert : true }, cb);
		db.collection('student').findOneAndUpdate({ _id : a}, {$set : data}, { upsert : true }, cb);
	});
}



/*


updateWhereId
{ _id: '5abdc24c1821283a54e03ccd',  full_name: 'Rohit Verma',  age: '22',  fee: '1800' }

*/