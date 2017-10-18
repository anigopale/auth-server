const Authentication = require('./controllers/authentication');

module.exports = function(app) {
  app.get('/', function(req, res, next) {
    res.send(['dummy','data']);
  });
  app.post('/signup', Authentication.signup);
}
// app.requesttype('route', function(req, res,next) {
//     res.send(data);
// });
