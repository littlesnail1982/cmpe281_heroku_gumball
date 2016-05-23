var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Gumball = require('../models/gumball.js');

/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Gumball.find(function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});

module.exports = router;