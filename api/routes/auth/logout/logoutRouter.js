const router = require("express-promise-router")();

router.get("/", (req, res) => {
	const { user } = req.session;

	req.session.destroy(error => {
		error
			? res.json({ error: "Unable to logout", error })
			: res.json({ message: `${user} has successfully logged out` });
	});
});

module.exports = router;
