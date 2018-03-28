var express = require('express');
var router = express.Router();

var backdoor_url = ['/dash'];



router.use(backdoor_url, function(req, res, next){
	if(! req.session.is_user_logged_in){
		res.redirect('/login');
	}

	next();
});
// Middle Ware
router.use('/', require("./home"));
router.use('/login', require("./login"));
router.use('/signup', require("./signup"));
router.use('/user', require("./user"));
router.use('/student', require("./student"));




router.use('/dash', require("./dash"));

module.exports=router;