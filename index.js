const jsonServer = require("json-server"); // Importing json-server library
const server = jsonServer.create();
const cors = require('cors');
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; // Choose port from here like 8080, 3001

server.use(cors());
server.use(middlewares);
server.use(jsonServer.bodyParser); // Enable body parsing for POST requests

// Log incoming requests for debugging
server.use((req, res, next) => {
  console.log(`Incoming ${req.method} request to ${req.url}`);
  console.log("Request body:", req.body);
  next();
});

server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
