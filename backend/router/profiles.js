const router = require("express").Router();
const Profile = require("../model/Profile");
const verify = require('./verifyToken');
const mongoose = require("mongoose");



router.post("/",verify, (req, res) => {
	const profile = new Profile({
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		storename: req.body.storename,
		address: req.body.address,
		location: req.body.location,
	});
	profile.save();
	res.send(profile);
});

router.put("/",verify, (req, res) => {
	const profile = new Profile({
		_id: req.body.id,
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		storename: req.body.storename,
		address: req.body.address,
		location: req.body.location,
	});
	Profile.findOneAndUpdate({ _id: req.body.id }, profile, (error, doc) => {
		if (error) {
			res.status(404).send(error);
		} else {
			res.send(profile);
		}
	});
});

router.delete("/",verify, (req, res) => {
	Profile.deleteOne({ _id: req.body.id }, (error) => {
		if (error) {
			res.status(400).send(error)
		}
	});

	res.send("");
});

router.get("/", verify, async (req, res) => {
	const profiles = await Profile.find({});
	console.log(req.user)
	res.send(profiles);
});
module.exports = router;
