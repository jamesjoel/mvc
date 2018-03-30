var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	var pageData = { title : 'Dashboard Page', pagename : 'dash/index', msg : req.flash('msg')};
	res.render('layout', pageData);
});


module.exports=router;