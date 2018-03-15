var mysql =  require('mysql');
module.exports=function(query, cb){
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
	/*

	con.connect(function(err){
		con.query('', function(err, res){
	
		})
	
	})

	*/
