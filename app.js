var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('connect-flash');


var defaultCtrl=require('./controller/default');


app.set("view engine", "ejs");
app.set("views", __dirname+'/views');




app.use(bodyParser());
app.use(cookieParser());
app.use(session({
	secret : 'tss'
}));
app.use(flash());
app.use(express.static(__dirname+'/public'));


app.use(defaultCtrl);

app.listen(3000, function(){
	console.log("Server Running");
});