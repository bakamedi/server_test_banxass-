var Weighing = require('../models/weighing.model');

exports.GetWeighing = function (req, res) {
	try {
		Weighing.find({
			REGISTER_DATE:{
				$gte: new Date(req.body.START_DATE),
				$lt: new Date(req.body.END_DATE)
			},
			CODE_TAG: req.body.TYPE}, 
			'WEIGHT CODE_PACKAGING CODE_TAG REGISTER_DATE', 
			function(err, result){
				if(err){
					return handleError(err);
				}else{
					if(result != undefined && result != [] && result != null){
						console.log(result);
						res.json(result);
					}
					if(result == null){
						res.status(500).send('no se encontro pesaje');
					}
					else{
						res.status(500).end();
					}
				}
			}
		);
	} catch (error) {
		res.status(500).send(error);
	}
}

exports.CreateWeighing = function (req, res) {
	try {
		const weighingModel = {
			WEIGHT:         req.body.WEIGHT_REGISTER,
			CODE_PACKAGING: req.body.CODE_PACKAGING_REGISTER,
			CODE_TAG:       req.body.CODE_TAG_REGISTER,
			REGISTER_DATE:  new Date(req.body.REGISTER_DATE_REGISTER)
		}
		var newWeighing = new Weighing(weighingModel);
		newWeighing.save(function(err) {
			if (err){
				res.status(500).send('error al crear pesaje');
			}else{
				res.status(200).end();
			}
		});
	} catch (error) {
		res.status(500).send(error);
	}
}