
// module.exports = {
//   index: function(req, res, next) {
//     res.render('boards/index');
//   }
// };

var Scores = require('./../scores');

module.exports.index = function(req, res, next) {
  var scores = new Scores();
  scores.findAll(function(err, scores) {
    if (err) return next(err);

    res.render('boards/index', { scores: scores || [] });
  });
};


