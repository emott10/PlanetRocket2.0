var User = require('../../models/user');
var Key = require('../../models/key');
var bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;



/**
 * @description Verifies that the submitted apikey belongs to the submitting user, also returns the user_id for future Mongo calls
 * @param {String} key - the client side hash of the apiKey
 * @param {String} userName - the username that is associated with the key that is being used
 * @param {function} nextFunction - the function to be executed after the calls are all finished
 * @return {JSON}
 * 
 */    
exports.verifyKey = function(key, userName, req, res, nextFunction){
    
    
    var jsonResponse = {isvalid: false, userId: null};

    

    
    //find the User and get it's object ID
    User.findOne({username: userName}, (err, foundUser) =>{
        if(err){
            console.log(err);
            return jsonResponse
        }
        else if(foundUser == null){
            console.log('user does not exist');
            return jsonResponse
        }
        else{
            console.log('found user: ' + foundUser);

            //find keys that the user owns
            var userID = foundUser._id;
            Key.findOne({ownedBy: ObjectId(userID)}, function(err, ownedKey){
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
                    console.log('found key: '+ ownedKey);
                    
                    var isValid = bcrypt.compareSync(ownedKey.keyID, key);
                     if(isValid){
                        console.log(isValid);
                        jsonResponse.userId = userID;
                        jsonResponse.isvalid = true;
                        nextFunction(req,res, jsonResponse);
                        
                    }
                    else{
                        console.log('key not valid');
                        return jsonResponse;
                    }
                        
                    
                    
                }
                
            });
        }
        

    });

}