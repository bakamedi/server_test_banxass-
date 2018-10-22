var User = require('../models/user.model');

exports.GetUsersByType = function(req, res){
    try {
        User.find({TYPE: "INQUILINO"}, '_id CLIENT USER',function(err, result){
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