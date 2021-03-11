const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();

router.get("/onecall/:lat(-?[0-9]{0,2}[\.]?[0-9]{1,100})&:lon(-?[0-9]{1,3}[\.]?[0-9]{1,100})&:units([A-Z]+)", async (req, res) => {
	try {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/onecall?lat=${req.params.lat}&lon=${req.params.lon}&exclude=minutely,alerts&units=${req.params.units}&appid=${process.env.ONECALL_API_KEY}`
			);
		const {lat, lon, ...rest} = await response.json();

		return res.status(200).json({
			success: true,
			data:rest
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: err.message
		});
	}
});

router.get("/reverse/:lat(-?[0-9]{0,2}[\.]?[0-9]{1,100})&:lon(-?[0-9]{1,3}[\.]?[0-9]{1,100})", async (req, res) => {
	try {
		const response = await fetch(
			`https://maps.googleapis.com/maps/api/geocode/json?latlng=${req.params.lat},${req.params.lon}&result_type=political&key=${process.env.REVERSE_GEOCODING_API_KEY}`
		);
		const data = await response.json();

		return res.status(200).json({
			success: true,
			data: data.results[0].address_components
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: err.message
		});
	}
});

router.get("/geocoding/:cityName([A-Za-z]+(-[A-Za-z]+)?(-[A-Za-z]+)?(-[A-Za-z]+)?)", async (req, res) => {
	try {
		const response = await fetch(
			`https://maps.googleapis.com/maps/api/geocode/json?address=${req.params.cityName}&key=${process.env.GEOCODING_API_KEY}`
		);
		const data = await response.json();

		return res.status(200).json({
			success: true,
			data: {
				latitude: data.results[0].geometry.location.lat, 
				longitude: data.results[0].geometry.location.lng
			}
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: err.message
		});
	}
})

export {};
module.exports = router;
