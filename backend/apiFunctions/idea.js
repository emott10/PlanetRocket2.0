var bcrypt = require('bcryptjs');
var Idea = require('../models/idea');
var User = require('../models/user');
var Key = require('../models/key');
var verify = require('./keyVerify/verify');

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
    var key = req.body.apiKey;
    var ideaID = req.params.ideaId;
    var userName = req.body.userName;

    verify.verifyKey(key, userName, req, res, function(req, res, isValidKey){
        //if the key is valid, return the requested idea
        if(isValidKey){
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
            })
        }
    
        //if the key is not found, return an error message
        else{
            res.send('key error');
        }

    });

    
    
}


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {String} req.body.apiKey - the user's current apiKey
 * @param {String} req.body.userName - the current user's username
 * @param {String} req.body.ideaName - the new idea's name
 * @param {String} req.body.ideaDescription - the idea's description
 * @returns - either error code or or success message
 * @description - This method creates a new idea object
 */
exports.createIdea = function(req, res){
    var key = req.body.apiKey;
    var userName = req.body.userName;
    


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
    var key = req.body.apiKey;
    var userName = req.body.userName;



    verify.verifyKey(key,userName, req, res, function(req, res, isValidKey){

        if(isValidKey.isvalid){
            Idea.find({owner: isValidKey.userid}, function(err, ideas){
                if(err){
                    console.log(err);
                }
                else{
                    res.send(ideas);
                }
            })
    
        }

    });

    
}