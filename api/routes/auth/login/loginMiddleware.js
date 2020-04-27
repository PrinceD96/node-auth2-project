const bcrypt = require("bcryptjs");
const Users = require("../../../routes/users/usersModel");

const validateUser = (req, res, next) => {
	const { body } = req;

	JSON.stringify(body) === "{}"
		? res.status(400).json({ message: "Username and password are required" })
		: !body.username || !body.password
		? res.status(400).json({
				message: `missing required ${
					!body.username ? "username" : !body.password ? "password" : null
				} field`
		  })
		: (req.response = body);
	next();
};

const validatePassword = (req, res, next) => {
	let { username, password } = req.body;

	Users.findBy({ username })
		.first()
		.then(user => {
			if (user && bcrypt.compareSync(password, user.password)) {
				req.session.user = username;
				next();
			} else {
				res.status(401).json({ message: "Invalid Credentials" });
			}
		})
		.catch(error => res.status(500).json(error));
};

module.exports = { validateUser, validatePassword };
