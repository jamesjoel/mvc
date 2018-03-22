var express = require('express');
var router = express.Router();

var student = require('../model/student');


router.get('/', function(req, res){
	var pageData = { title : 'Studnet Page', pagename : 'student/index'};
	res.render('layout', pageData);
	// console.log("Studnet Contrller");
	// 	student.decAge(function(err, result){
	// 		console.log(result);
	// 	});

	// res.send("<h1>Studnet</h1>");
});

router.post('/', function(req, res){
	var age = req.body.age;
	student.selectWhere(age, function(err, result){
		console.log(result);
	});
});

module.exports=router;
