var routes = require("express").Router();
routes.get("/create", (req, res) => {
  res.send("creat user api");
});
routes.get("/read", (req, res) => {
  res.send("creat user api");
});
routes.get("/post", (req, res) => {
  res.send("creat user api");
});
routes.get("/delete", (req, res) => {
  res.send("delete user api");
});

module.exports = routes;
