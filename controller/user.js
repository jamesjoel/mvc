var express = require('express');
var router = express.Router();
var user = require('../model/user');

router.get('/', function(req, res){

	user.select(function(err, result){
		if(err){
			console.log('query error', err);
			return;
		}
		console.log(result);
		var data = JSON.parse(JSON.stringify(result));
		var pageData = { title : 'User Page', pagename : 'user/index', data : data};
		res.render('layout', pageData);
	});


});

module.exports=router;