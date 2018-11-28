var User = require('../../models/user');
var Key = require('../../models/key');
var bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;



/**
 * @description Verifies that the submitted apikey belongs to the submitting user, also returns the user_id for future Mongo calls
 * @param {String} key - the client side hash of the apiKey
 * @param {String} userName - the username that is associated with the key that is being used
 * @param {function} resolve - the function that takes our result data if there were no errors
 * @param {function} reject - the callback function tha handles errors
 */    
exports.verifyKey = function(key, userName, resolve, reject){
    
    
    var jsonResponse = {isvalid: false, userId: null};

    

    
    //find the User and get it's object ID
    User.findOne({username: userName}, (err, foundUser) =>{
        if(err){
            console.log('eerrror finding user');
            reject(err);
        }
        else if(foundUser == null){
            console.log('user does not exist');
            reject(err);
        }
        else{

            //find keys that the user owns
            var userID = foundUser._id;
            Key.findOne({ownedBy: ObjectId(userID)}, function(err, ownedKey){
                if(err){
                    console.log('error fidning key');
                    reject(err);
                }
                
                //if there are no existing keys for the user, return message to the client
                else if(ownedKey == null){
                    console.log('no keys found for user');
                    reject('no owned keys for user');
                }

                //once a key is found, compare the hash from the user to the actual key
                else{                    
                    var isValid = bcrypt.compareSync(key, ownedKey.keyID);
                     if(isValid){
                        
                        jsonResponse.userId = userID;
                        jsonResponse.isvalid = true;
                        resolve(jsonResponse);
                        
                    }
                    else{
                        console.log('key not valid');
                        reject('key not valid');
                    }
                        
                    
                    
                }
                
            });
        }
        

    });

}