const http = require("http");
const router = require("./router.js");

const server = http.createServer(router);

const port = process.env.PORT || 5000;

const startServer = () => {
  server.listen(port, () => {
    console.log(`WE'RE IN BUSINESS ON ${port}`);
  });
};

startServer();
