const router = require("express-promise-router")();
const registerRouter = require("./register/registerRouter");
const loginRouter = require("./login/loginRouter");

module.exports = [
	router.use("/register", registerRouter),
	router.use("/login", loginRouter)
];
