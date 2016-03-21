var express = require('express');
var router = express.Router();

var pg = require('pg');

var connectionString = 'postgres://localhost/postgres';

function runQuery (query, callback) {
  pg.connect(connectionString, function (err, client, done) {
    if (err) { done(); console.log(err); return; }
    client.query(query, function (err, results) {
      done();
      if (err) { console.log(err); return; }
      callback(results);
    });
  });
}


/* GET home page. */
router.get('/', function(req, res, next) {
  runQuery('SELECT * FROM cars', function (results) {
    res.send(results.rows);
  });
  // res.render('index', { title: 'Express' });
});

module.exports = router;
