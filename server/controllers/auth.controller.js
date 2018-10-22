var User = require('../models/user.model');

exports.LoginUser = function(req, res){
	try {
        User.findOne({CLIENT: req.body.CLIENT , 
                      PASSWORD: req.body.PASSWORD,
                      USER: req.body.USER}, '_id CLIENT USER ACTIVE',function(err, result){
			if(err){
				return handleError(err);
			}else{
				if(result != undefined && result != [] && result != null){
                    if(result.ACTIVE){
                        res.json({logIn: true, message:"Ya esta logeado en otro dispositivo"});
                    }else{
                        result.ACTIVE = true;
                        result.save();
                        console.log(result);
                        res.json(result);
                    }
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

exports.logOutUser = function(req, res){
    try {
        console.log(req.body.CLIENT);
        console.log(req.body.USER);
        User.findOne({
            CLIENT: req.body.CLIENT , 
            USER: req.body.USER}, 'ACTIVE', function (err, result) {
            if(err){
                return handleError(err);
            }else{
                if(result != undefined && result != [] && result != null){
                    result.ACTIVE = false;
                    result.save();
                    res.json({log:"log out ssuccessfull", active: false});
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
        USER:       req.body.USER_REGISTER,
        TYPE:       req.body.TYPE_REGISTER
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