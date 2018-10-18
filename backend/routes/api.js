var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.send('the base url for our api is here');
	});
module.exports = router;
