var http = require("http");

var my_server = http.createServer(function (request, res) {
	res.writeHead(200);
	res.end("Hello World");
})

my_server.listen(8080);
console.log("Server running");
