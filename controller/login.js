var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var User = require('../model/user');

router.get('/', function(req, res){
	var pageData = { title : 'Login Page', pagename : 'login/index', msg : req.flash('msg')};
	res.render('layout', pageData);
});
router.post('/', function(req, res){
	var data = req.body;
	User.selectWhere({ loginname : data.loginname }, function(err, result){
		if(result.length>0)
		{
			var incrypt_password = crypto.createHash('md5').update(data.password).digest('hex');
			
			if(result[0].password == incrypt_password)
			{
				req.session.is_user_logged_in=true;
				req.session.user_id=result[0]._id;
				req.session.username=result[0].loginname;
				res.redirect('/dash');

			}
			else{
				req.flash('msg', 'This Password is incorrect !');
				res.redirect('/login');		
			}
		}
		else
		{
			req.flash('msg', 'This Usename and Password is incorrect !');
			res.redirect('/login');
		}
	});

});


router.get('/new', function(req, res){
	console.log('calling');
});


module.exports=router;