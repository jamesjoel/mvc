var mysql =  require('mysql');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";


module.exports.mysql=function(query, cb){
	var con = mysql.createConnection({
		host : '127.0.0.1',
		user : 'root',
		password : '',
		database : 'tss_9'
	});
	con.connect(function(err){
		if(err){
			console.log('DB Error', err);
			return;
		}
		con.query(query, cb);
	})
}


module.exports.mongodb=function(cb){
	// MongoClient.connect(url, function(err, client){
	// 	var db = client.db('tss');
	// 	db.collection('student').find().toArray(function(err, result){
	// 		console.log(result);
	// 	});
	// });
	MongoClient.connect(url, cb);
}
