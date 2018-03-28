var config = require('../config/config');
var connect = require('../config/connection');

console.log(config);
module.exports.select=function(cb){
	connect.mongodb(function(err, client){
		var db = client.db(config.dbName);
		db.collection('user').find().toArray(cb);
	});
}
// module.exports.selectWhere=function(age, cb){
// 	connect.mongodb(function(err, client){
// 		var db = client.db(db.dbName);
// 		db.collection('user').find({ age : {$gt : age }}).toArray(cb);
// 	});
// }

module.exports.decAge=function(cb){
	connect.mongodb(function(err, client){
		var db = client.db(config.dbName);
		db.collection('user').find({ age : {$gt : 25 }}).sort({ age : -1}).toArray(cb);
	});
}
module.exports.selectWhereUsername=function(username, cb){
	connect.mongodb(function(err, client){
		var db = client.db(config.dbName);
		db.collection('user').find({ email : username }).toArray(cb);
	});
}


module.exports.selectWhere=function(obj, cb){ // { username : 'demo@gmail.com'}
			// { username : 'demo@gmail.com', password : '123' }
			
		connect.mongodb(function(err, client){
			if(err){
				console.log('Connection error', err);
				return;
			}
			var db = client.db(config.dbName);
			db.collection('user').find(obj).toArray(cb);
		});
}


module.exports.insert=function(obj, cb){
	connect.mongodb(function(err, client){
		if(err){
				console.log('Connection error', err);
				return;
			}
			var db = client.db(config.dbName);
			db.collection('user').insert(obj, cb);

		});
}


/*

db.collection().insert({ name : 'james' }, function(err, result){
	
})


.find({ })







$this->db->where('', );
$this->db->where('', );
$this->db->where('', );
$this->db->get('');





*/