var Canvas = require('../models/idea');
var verifyKey = require('../apiFunctions/keyVerify/verify');
var mongoose = require('mongoose');
var objectId = mongoose.Types.ObjectId;

/**
 * @param {String} req.body.apiHash
 * @param {String} req.body.username
 * @param {String} req.body.canvasName;
 * @param {String} req.body.ideaId;
 * @returns {Boolean}
 * @description - the endpoint function that creates a canvas
 * 
 */
exports.createCanvas = (req,res) => {

    var key = req.body.apiKey;
    var userName = req.body.username;
    
    let promise = new Promise(function(resolve, reject){
        verify.verifyKey(key,userName,resolve,reject);
    });

    //once the key is verified or reject, respond appropriatley
    promise.then(
        
        function(result){

        //if the key and user are valid, create a new canvas and respond with a success message
            if(result.isvalid){
                
                //get the user object ID from the result object
                userId = result.userId;
                currentIdea = req.body.ideaId;
                canvasName = req.body.canvasName;

                //create a new canvas 
                Canvas.create({ownedBy: objectId(userId), ofIdea: objectId(currentIdea), name: canvasName }, (err, result) => {
                    if(err){
                        console.log(err);
                        res.send(false);

                    }
                    else{
                        res.send(true);
                    }
                });

            }

            //if the key or user are not valid, respond with an error
            else{

                res.send(false);

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
 * @param {String} req.params.apiKey
 * @param {String} req.params.userID
 * @param {String} req.params.canvasID
 * @returns {Object} - returns either the requested canvas json object or a false boolean
 * @description - the endpoint function for fetching a canvas
 */
exports.getCanvas = (req, res) => {
    var key = req.params.apiKey;
    var userName = req.params.userID;
    var canvasName = req.body.canvasName;

    let promise = new Promise(function(resolve, reject){
        verify.verifyKey(key,userName,resolve,reject);
    });

    //once the key is verified or reject, respond appropriatley
    promise.then(
        
        function(result){

            if(result.isvalid){
            
                var userId = result.userId;
                Canvas.findOne({ownedBy: objectId(userId), name: canvasName}, (err, result) => {
                    if(err){
                        console.log(err);
                        res.send(false);
                    }
                    else{
                        
                        res.send(result);
                    }
                });
        
            }
            else{
                res.send(false);
            }
        },
        function(error){
            console.log(error);
        }

    );

    
}

/**
 * @param {*} req 
 * @param {*} res 
 * @param {String} req.params.apiKey
 * @param {String} req.body.username
 * @returns {boolean} - value indicating successful/unsuccessful update
 * @description - endpoint function that updates an existing canvas
 */
exports.updateCanvas = (req, res) => {

    var key = req.body.apiKey;
    var userName = req.body.username;
    
    let promise = new Promise(function(resolve, reject){
        verify.verifyKey(key,userName,resolve,reject);
    });

    //once the key is verified or reject, respond appropriatley
    promise.then(
        
        function(result){
            var canvasName = req.body.canvasName;
            var firstResponse = req.body.one;
            var secondResponse = req.body.two;
            var thirdResponse = req.body.three;

            if(result.isvalid){

                var userId = req.body.userId;
                Canvas.findOneAndUpdate({ownedBy: objectId(userId), name: canvasName} , {firsPanel: firstResponse, secondPanel: secondResponse, thirdPanel:thirdResponse}, (err, result) => {
                    if(err){
                        console.log(err);
                        res.send(false);
                    }
                    else{
                        res.send(true);
                    }
                });
            }
            else{
                res.send(false);
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
 * @param {String} req.params.apiKey
 * @param {String} req.body.username
 * @param {String} req.body.canvasName
 * @returns {boolean} - value indicating successful/unsuccessful deletion
 */
exports.deleteCanvas = (req,res) => {

    var key = req.body.apiKey;
    var userName = req.body.username;
    let promise = new Promise(function(resolve, reject){
        verify.verifyKey(key,userName,resolve,reject);
    });

    //once the key is verified or reject, respond appropriatley
    promise.then(
        
        function(result){

            if(result.isvalid){

                userId = result.userId;
                canvasName = req.body.canvasName;
        
                Canvas.deleteOne({ownedBy:objectId(userId), name: canvasName}, (err, result) => {
                    if(err){
                        res.send(false);
                    }
                    else{
                        res.send(true);
                    }
                });
            }
            else{
                res.send(false);
            }
        },
        function(error){
            console.log(error);
        }

    
    );

    
}