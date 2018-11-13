var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user');
var Idea = require('./idea');

var canvasSchema = new Schemaa( {
   
    name: String,
    ownedBy: {type: Schema.Types.ObjectId, ref: "User"},
    ofIdea: {type: Schema.Types.ObjectId, ref:"Idea"},
    firstPanel: String,
    secondPanel: String,
    thirdPanel: String,
    

});