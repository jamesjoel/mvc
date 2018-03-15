var express = require('express');
var router = express.Router();

var urls = ['/login', '/signup'];

router.use(urls, function(req, res, next){
	console.log('---------------------');
	next();
});
// Middle Ware
router.use('/', require("./home"));
router.use('/login', require("./login"));
router.use('/signup', require("./signup"));
router.use('/user', require("./user"));

module.exports=router;