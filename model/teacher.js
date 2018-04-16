var config = require('../config/config');
var connect = require('../config/connection');


module.exports.insert=function(obj, cb){
	connect.mongodb(function(err, client){
		if(err){
				console.log('Connection error', err);
				return;
			}
			var db = client.db(config.dbName);
			


			db.collection('teacher').insert(obj, cb);

		});
}
module.exports.selectCount=function(cb){
	connect.mongodb(function(err, client){
		if(err){
				console.log('Connection error', err);
				return;
			}
			var db = client.db(config.dbName);
			db.collection('teacher').count(cb);
		});	
}
