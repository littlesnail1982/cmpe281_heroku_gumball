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

router.post('/create/:id/:value', function(req, res, next) {
	var newItem = new Gumball({
		_id: req.params.id, 
		value: req.params.value
	});
	newItem.save(function(err, data){
		if (err) {
			res.json(err);
		}
		else {
			res.json(data);
		}
	});
});

/* UPDATE one item */
router.put('/:id/:value', function(req, res, next) {
	var name = {_id: req.params.id};
	var update = {value: req.params.value};
	var options = {new: true};

	Gumball.findOneAndUpdate(name, update, options, function(err, data){
		if (err) {
			res.json(err.message);
		}
		else {
			res.json(data);
		}
	});
});


module.exports = router;