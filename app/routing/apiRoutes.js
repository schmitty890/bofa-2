var axios = require('axios');
// API Routes
module.exports = function(app) {
  app.get('/api/groceries', function(req, res) {
    var myJSON = 'https://api.myjson.com/bins/1g3ryg'; // see https://api.myjson.com/bins/1g3ryg that is the json object hosted instead of storing the json data in our files.
    axios.get(myJSON)
      .then(function(resp) {
        res.json(resp.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
};
