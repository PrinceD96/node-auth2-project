const router = require("express-promise-router")();
const registerRouter = require("./register/registerRouter");

module.exports = [router.use("/register", registerRouter)];
