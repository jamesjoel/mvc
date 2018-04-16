var express = require('express');
var router = express.Router();
var Teacher = require('../model/teacher');
var NewStu = require('../model/newstu');




router.get('/', function(req, res){
	// var data = { name : "gaurav", class : "12", subject : "math"};
	// Teacher.selectCount(function(err, result){
	// 	var total = result;
	// 	data.id=total+1;
	// 	Teacher.insert(data, function(err, result){
	// 		if(err){
	// 			console.log("---------", err);
	// 			return;
	// 		}
	// 		console.log("*********", result);
	// 	});
		
	// });
	var arr = [{fullname : "rohit", class: 10 }];
	NewStu.insertMany(arr, function(err, docs){
		console.log(docs);
	});

});

module.exports=router;


/*

db.teacher.aggregate([
        {
            $lookup : 
            {
                from : "student",
                localField : "class",
                foreignField :"class",
                as : "stuName"
            }
        }
    ])

*/