var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GumballSchema = new Schema(
{
	_id: Number,
    value: String
});

module.exports = mongoose.model('gumball', GumballSchema,'gumball');