const router = require('express').Router();
const request = require('request');


router.get('/', function(req,res) {


  res.render('user/index')
});






module.exports = router;
