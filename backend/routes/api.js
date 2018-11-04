var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bcrypt = require('bcryptjs');
var db = require('../config/mongoConnect');
var userFunctions = require('../apiFunctions/user');
var keyFunctions = require('../apiFunctions/key');


router.get('/', function(req, res, next) {
	res.send('the base url for our api is here');
	});

router.post('/register', userFunctions.create_user);

router.post('/key', keyFunctions.issue_key);
module.exports = router;

