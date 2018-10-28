var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bcrypt = require('bcryptjs');
var db = require('../config/mongoConnect');

router.get('/', function(req, res, next) {
	res.send('the base url for our api is here');
	});

router.post('/register', function(req,res,next){
	userPass = req.body.password;
	userName = req.body.username;
	console.log('post request');
	
	
	bcrypt.hash(userPass, 10, function(err, hash){
		console.log('hash complete')	;
		User.create({username: userName, password: hash}, function(err, user){
			if(err){
				console.log(err);
			}
			
		});
		
	});
	res.send('done');
});
module.exports = router;

