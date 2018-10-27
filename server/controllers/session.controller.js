var Session = require('../models/session.model');
var jwt     = require('../../security/jwt');

exports.GetSessions = function(req, res){

    try {
        jwt.VerifyToken(req.params.token, function(result){
            console.log(result.decoded);
            if(result.decoded){
                Session.find({}, '_id NAME START_DATE END_DATE TYPE', 
                    function (err, result) {
                        if(err){
                            res.status(500).send(err);
                        }
                        //console.log(result);
                        res.json(result);
                    }
                );
            }            
        });
    } catch (error) {
        console.log(error);
    }
        //console.log(req.params.token);
        
        
       /*
       // esoto vale 
       Session.find({}, '_id NAME START_DATE END_DATE TYPE', 
            function (err, result) {
                if(err){
                    return handleError(err);
                }
                console.log(result);
                res.json(result);
            }
        );
        */
}

exports.CreateSession = function(req, res){
    const sessionModel = {
        NAME:           req.body.NAME_SESSION,
        START_DATE:     new Date(req.body.START_DATE_SESSION),
        END_DATE: 	    new Date(req.body.END_DATE_SESSION),
        TYPE:           req.body.TYPE_SESSION
    };
    var newSession = new Session(sessionModel);
    newSession.save(function(err){
        if (err) {
            return handleError(err);
        }else{
            res.status(200).end();
        }
    });
}