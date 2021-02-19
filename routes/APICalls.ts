const express = require("express");
const router = express.Router();

router.get("/:lat(-?[0-9]{0,2}[\.]?[0-9]{1,100})&:lon(-?[0-9]{1,3}[\.]?[0-9]{1,100})", (req, res) => {
	res.json(req.params);
});

export {};
module.exports = router;
