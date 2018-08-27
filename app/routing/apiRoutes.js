var axios = require('axios');
// API Routes
module.exports = function(app) {
  app.get('/api/groceries', function(req, res) {
    console.log('https://api.myjson.com/bins/1g3ryg');
    var myJSON = 'https://api.myjson.com/bins/1g3ryg';
    axios.get(myJSON)
      .then(function (resp) {
        res.json(resp.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

};
