const server = require("express")();
const json = require("express").json();
const helmet = require("helmet")();
const cors = require("cors")();
const restricted = require("./routes/auth/restrictedMiddleware");

const usersRouter = require("./routes/users/usersRouter");
const authRouter = require("./routes/auth/authRouter");

server.use(json, helmet, cors);

server.use("/api/users", restricted, usersRouter);
server.use("/api", authRouter);

server.get("/", (req, res) => {
	res.send("API is up");
});

module.exports = server;
