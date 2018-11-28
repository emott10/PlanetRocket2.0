var Idea = require('../models/idea');
var verify = require('./keyVerify/verify');
var mongoose= require('mongoose');
var objectId = mongoose.Types.ObjectId;

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {String} req.body.apiKey - the user's current apiKey
 * @param {String} req.params.ideaID - the user's idea ID 
 * @param {String} req.body.userName - the current user's username
 * @returns - either error code or the idea JSON object
 * @description - This method returns a user their Idea 
 */
exports.getIdea = function(req, res){
    var key = req.params.apiKey;
    var ideaID = req.params.ideaId;
    var userName = req.body.userName;

    let promise = new Promise(function(resolve, reject){
        verify.verifyKey(key,userName,resolve,reject);
    });

    //once the key is verified or reject, respond appropriatley
    promise.then(
        
        function(result){
        //if the key is valid, return the requested idea
            if(result){
                Idea.findById(ideaID, function(err, foundIdea){
                    if(err){
                        console.log(err);
                    }
                    else if(foundIdea == null){
                        console.log('idea not found');
                    }
                    else{
                        //once the idea is found, send it to the client
                        res.send(foundIdea);
                    }
                });
            }    
            //if the key is not found, return an error message
            else{
                res.send('key error');
            }
        },
        function(error){
            console.log(error);
        }
    );  
}


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {String} req.params.apiKey - the user's current apiKey
 * @param {String} req.body.userName - the current user's username
 * @param {String} req.body.ideaName - the new idea's name
 * @param {String} req.body.ideaDescription - the idea's description
 * @returns - either error code or or success message
 * @description - This method creates a new idea object
 */
exports.createIdea = function(req, res){
    var key = req.params.apiKey;
    var userName = req.params.userID;
    
    //use promises to sync up asynchronous Mongodb queries
    let promise = new Promise(function(resolve, reject){
        verify.verifyKey(key,userName,resolve,reject);
    });

    //once the key is verified or reject, respond appropriatley
    promise.then(
        
        function(result){
            console.log('in promise');
            var ideaName = req.body.ideaName
            var ideaDescription = req.body.ideaDescription;
            //if the apikey is valid, create a new idea object
            if(result.isvalid){

                Idea.create({title: ideaName, initialDescription: ideaDescription, owner: objectId(result.userId)}, function(err, newIdea){
                    if(err){
                        console.log(err);
                    }
                    else{
                        res.send({idea: newIdea, message: 'idea created'});
                    }
                });
                console.log('promise done');
            }

            //if the key is not valid, return an error message
            else{
                console.log('not valid');
            }
        
    },
    function(error){
        console.log('error');
    });


    /**
     * This is the original implementation of key verification before promises were implemented
     * 
    verify.verifyKey(key, userName,req,res, function(req,res, isValidKey){
    
        var ideaName = req.body.ideaName
        var ideaDescription = req.body.ideaDescription;
         //if the apikey is valid, create a new idea object
        if(isValidKey.isvalid){

            Idea.create({title: ideaName, initialDescription: ideaDescription, owner: isValidKey.userid}, function(err, newIdea){
                if(err){
                    console.log(err);
                }
                else{
                    res.send('idea created');
                }
            })
        }

        //if the key is not valid, return an error message
        else{
            console.log('not valid');
        }

    });
    */


    

   
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {String} req.body.apiKey - the user's current apiKey
 * @param {String} req.body.userName - the current user's username
 * @returns - either error code or or success message
 * @description - This method gets all the ideas for a particular user
 */
exports.getAllIdeas = function(req, res){
    var key = req.params.apiKey;
    var userName = req.params.userID;



    let promise = new Promise(function(resolve, reject){
        verify.verifyKey(key,userName,resolve,reject);
    });

    //once the key is verified or reject, respond appropriatley
    promise.then(
        
        function(result){
            console.log(result.userId)

            if(result.isvalid){
                Idea.find({owner: objectId(result.userId)}, function(err, ideas){
                    if(err){
                        console.log(err);
                    }
                    else{
                        console.log(ideas);

                        res.send(ideas);
                    }
                });
        
            }
        },
        function(error){
            res.send(false);
            console.log(error);
        }

    );

    
}

exports.deleteIdea = function(req,res){
    var key = req.params.apiKey;
    var userName = req.params.userID;
    var ideaId = req.params.ideaId;

    //verify that the key belongs to the user making the request
    let promise = new Promise(function(reject, resolve){

        verify.verifyKey(key,userName,resolve, reject);

    });



    //delete the idea if the apikey and user are valid
    promise.then(

        function(result){

            Idea.deleteOne({_id: objectId(ideaId)}, function(err){
                if(err){
                    console.log(err);
                    res.send(false);
                }
                else{
                    res.send(true);
                }
            })

        },
        function(error){

            console.log(error);
            res.send(false);

        }
    );
}