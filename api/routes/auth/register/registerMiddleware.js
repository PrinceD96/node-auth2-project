const bcrypt = require("bcryptjs");

const hashPassword = (req, res, next) => {
	let user = req.body;

	const hash = bcrypt.hashSync(user.password, 14);
	user.password = hash;
	next();
};

const validateUser = (req, res, next) => {
	const { body } = req;

	JSON.stringify(body) === "{}"
		? res.status(400).json({ message: "missing user data" })
		: !body.username || !body.password || !body.department
		? res.status(400).json({
				message: `missing required ${
					!body.username
						? "username"
						: !body.password
						? "password"
						: !body.department
						? "department"
						: null
				} field`
		  })
		: (req.response = body);
	next();
};

module.exports = { hashPassword, validateUser };
