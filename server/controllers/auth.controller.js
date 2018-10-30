var User = require('../models/user.model');
var jwt  = require('../../security/jwt');

exports.LoginUser = function(req, res){
	try {
		User.findOne({
			PASSWORD: req.body.PASSWORD,
			USER: req.body.USER}, '_id CLIENT USER ACTIVE',function(err, result){
			if(err){
				res.status(500).send(err);
			}else{
				if(result != undefined && result != [] && result != null){
					if(result.ACTIVE){
						res.json({logIn: true, message:"Ya esta logeado en otro dispositivo"});
					}else{
						result.ACTIVE = true;
						result.save();
						jwt.CreateToken(result, function(response){    
							res.json({
									user: result,
									token: response
							});
						});
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
	const userModel = {
		CLIENT:     req.body.CLIENT_REGISTER,
		PASSWORD:   req.body.PASSWORD_REGISTER,
		USER:       req.body.USER_REGISTER,
		TYPE:       req.body.TYPE_REGISTER
	}
	var newUser = new User(userModel);
	newUser.save(function(err) {
		if (err){
			res.status(500).send('error al registrar usuario');
				return false;
		}else{
			res.status(200).end();
		}
	});
}