const router = require("express-promise-router")();
const { hashPassword, validateUser } = require("./registerMiddleware");
const Users = require("../../users/usersModel");

router.post("/", validateUser, hashPassword, (req, res) => {
	Users.add(req.response)
		.then(newUser => {
			res.status(201).json(newUser);
		})
		.catch(error =>
			res.status(500).json({ error: "Error adding user", error })
		);
});

module.exports = router;
