var express = require('express');
var router = express.Router();
var User = require('../models/user');
router.get('/', function(req, res, next) {
	res.send('the base url for our api is here');
	});

router.post('/register', function(req,res,next){
	res.send('here is some stuff');
})
module.exports = router;

router