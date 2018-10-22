var Weighing = require('../models/weighing.model');

exports.CreateWeighing = function(req, res){
    const usuarioModel = {
        SESSION:     req.body.CLIENT_REGISTER,
        WEIGHT:      req.body.PASSWORD_REGISTER,
        CODE_LABEL:  req.body.USER_REGISTER
    }
    var newUser = new User(usuarioModel);
    newUser.save(function(err) {
        if (err){
            res.status(500).send('error al registrar usuario');
            return false;
        }else{
            res.status(200).end();
        }
    });
}