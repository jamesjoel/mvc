var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/tss');

var teacher = mongoose.model("Teacher", new mongoose.Schema({
	fullname : String,
	class : Number
}));

  

