const http = require("http");

http.createServer((_req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  res.send({
    message: "Success!!",
  });
});
