const server = require("express")();
const json = require("express").json();
const helmet = require("helmet")();
const cors = require("cors")();
const session = require("express-session");
const restricted = require("./routes/auth/restrictedMiddleware");
const { JWT_SECRET } = require("../env");

const usersRouter = require("./routes/users/usersRouter");
const authRouter = require("./routes/auth/authRouter");

const sessionConfig = {
	name: "taco",
	secret: JWT_SECRET,
	cookie: {
		maxAge: 1000 * 30,
		secure: false,
		httpOnly: true
	},
	resave: false,
	saveUninitialized: true
};

server.use(json, helmet, cors, session(sessionConfig));

server.use("/api/users", restricted, usersRouter);
server.use("/api", authRouter);

server.get("/", (req, res) => {
	res.send("API is up");
});

module.exports = server;
