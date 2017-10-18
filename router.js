module.exports = function(app) {
  app.get('/', function(req, res, next) {
    res.send(['waterbottle', 'phone', 'paper']);
  });
}
// app.requesttype('route', function(req, res,next) {
//     res.send(data);
// });
