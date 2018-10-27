var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('test');
    res.send('get request at "/"')
});

router.post('/' , function(req, res){
    console.log('post request at "/"' );
    console.log(req.body);
    res.send('post request at "/"');
});

router.post('')

router.options('/', function(req,res){
    console.log('options?');
});

module.exports = router;
