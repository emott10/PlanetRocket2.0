var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user');

var ideaSchema = new Schema({
	title: String,
	initialDescription: String,
	currentDescription: String,
	owner: {type: Schema.Types.ObjectId, ref: "User"}
});

var Idea = mongoose.model('Idea', ideaSchema);

module.exports = Idea;

	
