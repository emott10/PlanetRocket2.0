var User = require('../../models/user');
var Key = require('../../models/key');
var bcrypt = require('bcryptjs');

    
exports.verifyKey = function(key, userName){
    var key = req.body.apiKey;
    var userName = req.body.userName;

    var jsonResponse = {isvalid: false, userId: null};

    //find the User and get it's object ID
    User.findOne({username: userName}, function(err, foundUser){
        if(err){
            console.log(err);
            return jsonResponse
        }
        else if(foundUser == null){
            console.log('user does not exist');
            return jsonResponse
        }
        else{

            //find keys that the user owns
            var userID = foundUser._id;
            Key.findOne({ownedBy: userID}, function(err, ownedKey){
                if(err){
                    console.log(err);
                    return jsonResponse;
                }
                
                //if there are no existing keys for the user, return message to the client
                else if(ownedKey == null){
                    console.log('no keys found for user');
                    return jsonResponse;
                }

                //once a key is found, compare the hash from the user to the actual key
                else{
                    bcrypt.compare(ownedKey.keyID, key), function(err, isValid){
                        if(isValid){

                            jsonResponse.userId = userID;
                            jsonResponse.isvalid = true;
                            return jsonResponse;
                        }
                        else{
                            console.log('key not valid');
                            return jsonResponse;
                        }
                    }
                }
                
            });
        }
        

    });
}