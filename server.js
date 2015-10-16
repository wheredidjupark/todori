var express = require('express');
var bodyParser = require('body-parser');
var Todo = require('./todoModel');
var app = express();


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//var form1 = new Form({name:"Forms1", created: new Date() });
//form1.save(); //save is going to insert the entry into the database. It will be validated against the Schema (i.e. It has to match the schema)

app.get("/api/todos", function(req, res) {
    Todo.find(function(err, todos) {

        var newTodos = [];
        todos.forEach(function(todo, index, array) {
            var newTodo = todo.toJSON();
            newTodo.links = {
                self: "http://" + req.headers.host + "/api/todos/" + newTodo._id
            };
            newTodos.push(newTodo);
        });
        res.json(newTodos);
    });
});

app.get("/api/todos/:id", function(req, res) {
    Todo.findById(req.params.id, function(req, todo) {
        res.json(todo);
    });
});

app.post("/api/todos", function(req, res) {
    //console.log(req.body);
    var todo = new Todo({
        name: req.body.name,
        task: req.body.task,
        created: Date.now(),
        isComplete: req.body.isComplete
    });
    todo.save();

    Todo.find(function(err, todos) {
        res.json(todos);
    });

});

app.delete("/api/todos/:id", function(req, res) {
    Todo.remove({_id: req.params.id}, function(err, count) {
        Todo.find(function(err, data) {
            res.json(data);
        });
    });
});

app.put('/api/todos/:id', function(req, res){
    Todo.findById(req.params.id, function(err, todo){
        todo.isComplete = req.body.isComplete;
        todo.save();
        res.json(todo);
    });
});


//By default, MongoDB automatically saves tables into a database with a plural (I personally don't like it). You can override it like below.


app.listen(3000);
