var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/', function(req, res){
	var pageData = { title : 'Upload Page', pagename : 'upload/index'};
	res.render('layout', pageData);
});

// var multer = require('multer');
// var upload = multer({ dest : 'uploads/'});
// router.post('/', upload.single('image'), function(req, res){
// 	console.log(req.file);
// });
var multer = require('multer');
var storage = multer.diskStorage({
				// destination : function(req, file, cb){
				// 	cb(null, './uploads/'); // when we create dinamic folder
				// },
				destination : './uploads/',
				filename : function(req, file, cb){
					cb(null, Date.now()+'.'+path.extname(file.originalname));
				}

			});

var upload = multer({storage : storage});
router.post('/', upload.single('image'), function(req, res){
	console.log(req.file);
	console.log(req.body);
	console.log(req.body.data);
	// req.body=req.body.data;
});


router.get("/getdata", function(req, res){
	res.send({ name : "rohit"});
});


module.exports=router;