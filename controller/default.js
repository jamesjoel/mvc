var express = require('express');
var router = express.Router();


var backdoor_url = ['/dash'];
// var backdoor_url = ['/dash', '/student'];



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
router.use('/upload', require("./upload"));
router.use('/teacher', require("./teacher"));


router.use('/dash', require("./dash"));

router.get('/logout', function(req, res){
	req.session.destroy();
	res.redirect("/login");
});


module.exports=router;