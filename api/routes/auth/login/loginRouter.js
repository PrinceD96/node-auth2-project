const router = require("express-promise-router")();
const { validateUser, validatePassword } = require("./loginMiddleware");
const generateToken = require("../generateToken");

router.post("/", validateUser, validatePassword, (req, res) => {
	const user = req.response;
	const token = generateToken({
		subject: req.user.id,
		username: req.user.username,
		department: req.user.department
	});
	// req.session.user = req.response.username;
	console.log(req.user);

	res.status(200).json({
		message: `Welcome ${user.username}!`,
		token
	});
});

module.exports = router;
