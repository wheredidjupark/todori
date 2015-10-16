(function() {

    var CurrentTaskController = function($scope, $http, api) {

        var user = "Ju Park";
        $scope.todoName = user;
        $scope.todoTask = "";

        api.getTodo().then(function(data) {
            $scope.todos = data;
        });

        $scope.removeTodo = function(todoId) {
            api.removeTodo(todoId).then(function(data) {
                $scope.todos = data;
            });
        };

        $scope.alert = function(todoTask){
            console.log("You clicked " + todoTask);
        };
        $scope.postTodo = function() {
            api.postTodo({
                name: $scope.todoName,
                task: $scope.todoTask
            }).then(function(data) {

                $scope.todos = data;
                $scope.todoName = user;
                $scope.todoTask = "";
            });
        };

        $scope.completeTodo = function(todoId, todo){
            todo.isComplete = true;
            $http.put('/api/todos/'+todoId, todo).then(function(response){
                todo = response.data;
            });
        };
    };

    angular.module("TodoApp").controller("CurrentTaskController", ['$scope', '$http', 'api', CurrentTaskController]);

})();
