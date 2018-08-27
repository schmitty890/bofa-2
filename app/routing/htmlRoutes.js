var path = require("path");

module.exports = function(app) {
  // HTML GET Requests
  // A GET / Route.
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/grocery-list.html"));
  });

  // A default, catch-all routes that leads back to grocery-list.html.
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/grocery-list.html"));
  });
};
