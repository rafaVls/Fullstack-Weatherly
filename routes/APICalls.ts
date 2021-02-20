const express = require("express");
const router = express.Router();

router.get("/:lat(-?[0-9]{0,2}[\.]?[0-9]{1,100})&:lon(-?[0-9]{1,3}[\.]?[0-9]{1,100})", (req, res) => {
	res.set({
		"Access-Control-Allow-Origin": "*",
		"Content-Type": "application/json"
	})
	res.status(200).json({lat: parseFloat(req.params.lat), lon: parseFloat(req.params.lon)});
});

export {};
module.exports = router;
