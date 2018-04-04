var express = require('express');
var router = express.Router();
var multer = require('multer');

var upload = multer({ dest : "./stu_image/"});


var Student = require('../model/student');


router.get('/', function(req, res){
	var pageData = { title : 'Student Page', pagename : 'student/index'};
	res.render('layout', pageData);

});
router.post('/add', upload.single('image'), function(req, res){
	// console.log("calling -----------------");
	// console.log(req.body);
	console.log(req.file);
	var data = req.body;
	// Student.insert(data, function(err, result){
	// 	if(err){
	// 		console.log('Insert err', err);
	// 		return;
	// 	}
	// 	res.send(result);
	// });
});

router.put('/add', function(req, res){
	// console.log("calling -----------------");
	var data = req.body;
	Student.updateWhereId(data, function(err, result){
		if(err){
			console.log('Update err', err);
			return;
		}
		console.log(result);
		res.send(result);
	});
});


router.get('/getAll', function(req, res){
	Student.selectAll(function(err, result){
		if(err){
			console.log('Insert err', err);
			return;
		}
		res.send(result);
	});
});

router.post('/delete', function(req, res){
	// console.log("calling -----------------");
	console.log(req.body);
	var data = req.body;
	Student.deleteWhereId(data, function(err, result){
		if(err){
			console.log('Insert err', err);
			return;
		}
		console.log(result);
		res.send(result);
	});
});



module.exports=router;
