var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var completedTodoSchema = new Schema({
	name: {type: String},
	task: {type: String},
	created: Date
}, {
	collection: 'completed'
});

module.exports = mongoose.model('completedTodo', completedTodoSchema);


