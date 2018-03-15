var connection = require('../config/connection');

module.exports.select=function(cb){
	var query = "SELECT * FROM user";
	connection(query, cb);
}

module.exports.isnert=function(data,cb){
	var query = "SELECT * FROM user";
	connection(query, cb);
}


/*

con.connect(function(err){
	
	con.query(q, function(err, res){
	
	})
})




*/