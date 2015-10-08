var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/TodoApp');

var Schema = mongoose.Schema;

var TodoSchema = new Schema({
    name: {type: String, default: "Ju Park"},
    task: {type: String, default: "none"},
    created: Date
}, {
    collection: 'todo'
}); //This is the schema (i.e. us telling what are the fields and the types)

module.exports = mongoose.model('Todo', TodoSchema); //creating a Form model
