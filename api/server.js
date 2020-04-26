const server = require("express")();
const json = require("express").json();
const helmet = require("helmet")();
const cors = require("cors")();
const restricted = require("./routes/auth/restrictedMiddleware");

const UsersRouter = require("./routes/users/usersRouter");

server.use(json, helmet, cors);

server.use("/api/users", restricted, UsersRouter);

server.get("/", (req, res) => {
	res.send("API is up");
});

module.exports = server;
