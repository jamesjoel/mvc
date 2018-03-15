var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	var pageData = { title : 'Signup Page', pagename : 'signup/index'};
	res.render('layout', pageData);
});

module.exports=router;