var User = require('../models/user');
var bcrypt = require('bcryptjs');


exports.create_user = function(req, res){
    var postUsername = req.body.username;
    var postPassword = req.body.password;

    //see if the username is already taken
    User.findOne({username: postUsername}, function(err, result){
        if(err){
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