var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Course = require('./course');
var Idea = require('./idea');

var userSchema = new Schema({
	email: String,
	password: String,
	username: String,
	courseInfo: [{
		courseID: { type: Schema.Types.ObjectId, ref:"Course"},
		courseName: String,
		progress: Number,
		ideaForCoures: {type: Schema.Types.ObjectId, ref: "Idea"}}],
	score: Number
});

var User = mongoose.model('User', userSchema);

module.exports = User;


