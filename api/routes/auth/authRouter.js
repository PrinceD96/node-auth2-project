const router = require("express-promise-router")();
const registerRouter = require("./register/registerRouter");
const loginRouter = require("./login/loginRouter");
const logoutRouter = require("./logout/logoutRouter");

module.exports = [
	router.use("/register", registerRouter),
	router.use("/login", loginRouter),
	router.use("/logout", logoutRouter)
];
