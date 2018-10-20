var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var User = require('./user');

var courseSchema = new Schema({
	Name: String,
	Category: String,
	Description: String,
	enrolledUsers: [{ type: Schema.Types.ObjectId, ref: "User"}]
});

var Course = mongoose.model('Course', courseSchema);

module.exports = Course;

