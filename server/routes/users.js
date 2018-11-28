var express = require('express');
var router = express.Router();
var pool = require('../config/dbConfig');

//작가명단뽑아오기
router.get('/', function(req, res, next) {
  pool.getConnection(function(err, conn){
    conn.release();
    if(err){
      res.send(201, {
        result: 0
      });
    }
    var sql = 'SELECT * FROM Client';
    conn.query(sql, function(err, row){
      if(err){
        res.send(201, {
          result: 0
        });  
      }
      res.send(200, {
        result: 1,
        data: row
      });
    })
  })
});

module.exports = router;
