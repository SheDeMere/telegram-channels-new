// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const channels = router.db.get("channels");
server.get("/informative", (req, res) => {
  res.json(channels.filter((channel) => channel.category === 1));
});

server.get("/entertaining", (req, res) => {
  res.json(channels.filter((channel) => channel.category === 2));
});

server.get("/it", (req, res) => {
  res.json(channels.filter((channel) => channel.category === 3));
});

server.get("/sports", (req, res) => {
  res.json(channels.filter((channel) => channel.category === 4));
});

server.get("/culinary", (req, res) => {
  res.json(channels.filter((channel) => channel.category === 5));
});

server.use(middlewares);
server.use(router);
server.listen(3001, () => {
  console.log("JSON Server is running");
});
