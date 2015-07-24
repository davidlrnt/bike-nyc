var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


 var teamdata = require('../model/teams');
 exports.index = function(req, res) {
   var strGroup = "D";
   teamdata.teamlist(strGroup, function(err, teamlist) {
     res.render('index', {
       title: 'Test web page on node.js using Express and Mongoose',
       pagetitle: 'Hello there',
       group: strGroup,
       teams: teamlist
     });
   });
 };

module.exports = router;
