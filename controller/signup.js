var express = require('express');
var router = express.Router();
var User = require('../model/user');

var crypto = require('crypto');


/*

password = req.param('password');
     var crypto = require('crypto');
     var incrypt_password = crypto.createHash('md5').update(password).digest('hex');

*/



router.get('/', function(req, res){
	var pageData = { title : 'Signup Page', pagename : 'signup/index', msg : req.flash('msg')};
	res.render('layout', pageData);
});

router.post('/', function(req, res){
	var data = req.body;
	var incrypt_password = crypto.createHash('md5').update(data.password).digest('hex');
	data.password=incrypt_password;
	User.selectWhere({ loginname : data.loginname }, function(err, result){
		// console.log(result.length);
		if(err){
			return;
		}
		if(result.length > 0)
		{
			req.flash('msg', 'This Username Already in Use');
			res.redirect('/signup');
		}
		else
		{
			User.insert(data, function(err, result){
				console.log(result);
				res.redirect('/login');
			});
		}
	});

});

module.exports=router;