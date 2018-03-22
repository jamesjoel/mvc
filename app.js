var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var defaultCtrl=require('./controller/default');



app.set("view engine", "ejs");
app.set("views", __dirname+'/views');

app.use(bodyParser());
app.use(express.static(__dirname+'/public'));


app.use(defaultCtrl);

app.listen(3000, function(){
	console.log("Server Running");
});