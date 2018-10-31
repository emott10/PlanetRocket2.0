var Key = require('../models/key');
var User = require('../models/user');
var bcrypt = require('bcryptjs');
var rand = require('random-key');

exports.issue_key = function(req, res){
    var postUsername = req.body.username;
    var postPassword = req.body.password;

    //see if the username matches with a stored user
    User.findOne({username:postUsername}, function(err, result){
        if(err){
            console.log(err);
            var jsonResponse = {loginSuccess: false, yourKey: null };
            res.send(jsonResponse);
        }
        else{
            //once the user is found, compare passwords
            bcrypt.compare(postPassword, result.password, function(err, goodHash){
                //if the passwords match, generate an API key and send it to the client
                if(goodHash){
                    console.log('passwords match');
                    apiKey = rand.generate(32);
                    //hash the apiKey and store it in mongo (or should we store the apikey and respond with the hash?)
                    bcrypt.hash(apiKey, 10, function(err, apiHash){
                        if(err){
                            console.log(err);

                        }
                        else{
                            //create the mongo key document with the hashed key value 
                            Key.create({keyID: apiHash}, function(err, key){
                                if(err){
                                    console.log(err);
                                }
                                else{
                                    //send the user the unhashed apiKey
                                    var jsonResponse = {loginSuccess: true, yourKey: apiKey};
                                    res.send(jsonResponse);
                                    
                                }
                            });
                            
                        }
                    });
                }
                //otherwise, return an error
                else{
                    console.log('passwords do not match');
                }
            })
        }
    })
    
}