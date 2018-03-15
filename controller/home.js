var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	var pageData = { title : 'Home Page', pagename : 'home/index'};
	res.render('layout', pageData);
});

module.exports=router;