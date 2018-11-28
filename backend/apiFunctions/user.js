var User = require('../models/user');
var bcrypt = require('bcryptjs');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns jsonResponse object containing a userCreated boolean and a message
 * 
 */
exports.create_user = function(req, res){
    var postUsername = req.body.username;
    var postPassword = req.body.password;

    //see if the username is already taken
    User.findOne({username: postUsername}, function(err, result){
        if(err){
            var jsonResponse = {userCreated: false, message: err};
            res.send(jsonResponse);
            console.log(err);
        }
        else{
            //if the username isnt taken, create a new user
            if(result == null){
                console.log('username is unique');
                
                //hash the password before storing it
                bcrypt.hash(postPassword, 10, function(err, hash){
                    if(err){
                        console.log(err);
                    }
                    else{
                        //once the password hashing is complete, create the new user
                        User.create({username:postUsername, password:hash}, function(err, user){
                            if(err){
                                console.log(err);
                            }
                            else{
                                var jsonResponse = {userCreated: true, message: 'user created'};
                                res.send(jsonResponse);
                            }
                        });

                    }
                });

            }
            //otherwise, return with an error
            else{
                console.log('username taken');
                var jsonResponse = {userCreated: false, message: 'username taken'};
                res.send(jsonResponse);
            }
            
        }
    });
}

exports.updateScore = (req, res) => {
    
    var username = req.params.userID;
    var key = req.params.apiKey;

    let promise = new Promise(function(resolve, reject){
        verify.verifyKey(key,username,resolve,reject);
    });

    promise.then(
        (result) =>{
            User.findOneAndUpdate({ _id: result.userId}, {$inc: {score: 1}},
                (err, response) => {
                    if(err){
                        
                        res.send(err);
                    }
                    else{
                        res.send(response);
                    }

            });
        },
        (error) => {
            res.send(error);
        }
    );
}