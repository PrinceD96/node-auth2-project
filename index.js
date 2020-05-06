const server = require("./api/server");
const { PORT } = require("./env");

const port = PORT || 5000;

server.listen(port, () => {
	console.log(`Server running on port ${port}...`);
});
