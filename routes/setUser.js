var mysql = require('mysql');

//MySQLに接続
const connection = mysql.createConnection({
  host : '59.157.7.30',
  user : 'root',
  password : 'ktkr1014',
  database: 'kingoftowers',
  timezone: 'jst'
});

module.exports = function(req, res, next) {
  var userId = req.session.userid;
  if (userId) {
    var query = 'SELECT userid, username FROM users WHERE userid = ' + userId;
    connection.query(query, function(err, rows) {
      if (!err) {
        res.locals.user = rows.length? rows[0]: false;
      }
    });
  }
  next();
};