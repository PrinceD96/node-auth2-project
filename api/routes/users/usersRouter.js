const router = require("express-promise-router")();
const Users = require("./usersModel");

router.get("/", (req, res) => {
	Users.find()
		.then(users => {
			users
				? res.status(200).json(users)
				: res.status(400).json({ error: "Failed to retrieved users" });
		})
		.catch(error => res.status(500).json({ error: error.message }));
});

module.exports = router;
