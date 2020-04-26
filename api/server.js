const server = require("express")();
const json = require("express").json();
const helmet = require("helmet")();
const cors = require("cors")();

server.use(json, helmet, cors);

server.get("/", (req, res) => {
	res.send("API is up");
});

module.exports = server;
