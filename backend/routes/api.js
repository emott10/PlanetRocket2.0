var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bcrypt = require('bcryptjs');
var db = require('../config/mongoConnect');
var userFunctions = require('../apiFunctions/user');
var keyFunctions = require('../apiFunctions/key');
var ideaFunctions = require('../apiFunctions/idea');


router.get('/', function(req, res, next) {
	res.send('the base url for our api is here');
	});

router.post('/register', userFunctions.create_user);

router.post('/key', keyFunctions.issue_key);

router.post('/idea', ideaFunctions.createIdea);

router.get('/idea/:ideaId', ideaFunctions.getIdea);
module.exports = router;

