var path = require("path");

module.exports = function(app) {
  // HTML GET Requests
  // A GET / Route.
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/grocery-list.html"));
  });

  // A default, catch-all route that leads to grocery-list.html.
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/grocery-list.html"));
  });
};
