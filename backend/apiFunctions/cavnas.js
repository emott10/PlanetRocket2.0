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
 * 
 */
exports.createCanvas = (req,res) => {

    var apiHash = req.body.apiHash;
    var username = req.body.username;
    
    //verify that the user making the request is permitted to use the supplied API key
    verifyKey(apiHash, username, req, res, function(req,res,verifyKey){

        //if the key and user are valid, create a new canvas and respond with a success message
        if(verifyKey.isvalid){
            
            //get the user object ID from the verifyResult object
            userId = verifyResult.userId;
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

    });

    
}

exports.getCanvas = (req, res) => {
    var apiHash = req.params.apiKey;
    var username = req.params.userID;
    var canvasName = req.body.canvasName;

    verifyKey(apiHash, username, req, res, function(req, res, verifyKey){

        if(verifyKey.isvalid){
        
            var userId = verifyResult.userId;
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

    });

    
}

exports.updateCanvas = (req, res) => {

    var apiHash = req.body.apiHash;
    var username = req.body.username;
    
    var verifyResult = verifyKey(apiHash, username, req, res, function(req, res, verifyKey){
        var canvasName = req.body.canvasName;
        var firstResponse = req.body.one;
        var secondResponse = req.body.two;
        var thirdResponse = req.body.three;

        if(verifyKey.isvalid){

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


    });

    
}

exports.deleteCanvas = (req,res) => {

    var apiHash = req.body.apiHash;
    var username = req.body.username;
    verifyKey(apiHash, username, req, res, function(req, res, verifyKey){

        if(verifyKey.isvalid){

            userId = verifyResult.userId;
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
    
    });

    
}