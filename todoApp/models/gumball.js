var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GumballSchema = new Schema(
{
	_id: Number,
    version: Number,
    countGumballs: Number,
    modelNumber: String,
    serialNumber: Number
});

module.exports = mongoose.model('gumball', GumballSchema,'gumball');