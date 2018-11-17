var express = require('express');
var router = express.Router();
var userFunctions = require('../apiFunctions/user');
var keyFunctions = require('../apiFunctions/key');
var ideaFunctions = require('../apiFunctions/idea');
var canvasFunctions = require('../apiFunctions/cavnas');


router.get('/', function(req, res, next) {
	res.send('the base url for our api is here');
	});

router.post('/register', userFunctions.create_user);

router.post('/key', keyFunctions.issue_key);

router.post('/idea/:apiKey/newIdea', ideaFunctions.createIdea);

router.get('/idea/:apiKey/user/:userID/oneIdea/:ideaId', ideaFunctions.getIdea);

router.get('/idea/:apiKey/userIdeas/:userID', ideaFunctions.getAllIdeas);

router.post('/canvas/:apiKey/newCanvas', canvasFunctions.createCanvas );

router.get('/canvas/:apiKey/user/:userID/canvasName/:canvasID', canvasFunctions.getCanvas);

router.put('/canvas/:apiKey/user/:userID/canvasName/:canvasID', canvasFunctions.updateCanvas);

router.delete('/canvas/:apiKey/user/:userID/canvasName/:canvasID', canvasFunctions.deleteCanvas);


module.exports = router;

