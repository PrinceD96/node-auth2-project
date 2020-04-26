const router = require("express-promise-router")();
const { validateUser, validatePassword } = require("./loginMiddleware");
const generateToken = require("../generateToken");

router.post("/", validateUser, validatePassword, (req, res) => {
	const user = req.response;
	const token = generateToken(user);

	res.status(200).json({
		message: `Welcome ${user.username}!`,
		token
	});
});

module.exports = router;
