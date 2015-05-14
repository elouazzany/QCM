'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var QuestionSchema = new Schema({
	title: String,
	type: String,
	response: String,
	choices: Array
});

var QcmSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	questions: [QuestionSchema]
});

// QcmSchema.schema.path('type').validate(function(value) {
// 	return /tf|unique|multiple/.test(value);
// }, 'Invalid type');

module.exports = mongoose.model('Qcm', QcmSchema);