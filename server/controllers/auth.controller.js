var User = require('../models/user.model');

exports.LoginUser = function(req, res){
	try {
        User.findOne({CLIENT: req.body.CLIENT , 
                      PASSWORD: req.body.PASSWORD,
                      USER: req.body.USER}, '_id',function(err, result){
			if(err){
				return handleError(err);
			}else{
				if(result != undefined && result != [] && result != null){
                    res.json(result);
				}
				if(result == null){
					res.status(500).send('usuario no encontrado');
				}
				else{
					res.status(500).end();
				}
			}
		});
	} catch (error) {
		res.status(500).send(error);
	}
}

exports.RegisterUser = function(req, res){
    const usuarioModel = {
        CLIENT:     req.body.CLIENT_REGISTER,
        PASSWORD:   req.body.PASSWORD_REGISTER,
        USER:       req.body.USER_REGISTER
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