(function() {

        var TaskController = function($scope, $http, api) {

            $scope.todoName = "";
            $scope.todoTask = "";

            api.getTodo().then(function(data) {
                $scope.todos = data;
            });

            $scope.removeTodo = function(todoId) {
                api.removeTodo(todoId).then(function(data) {
                    $scope.todos = data;
                });
            };

            $scope.postTodo = function() {
                api.postTodo({
                    name: $scope.todoName,
                    task: $scope.todoTask
                }).then(function(data) {
                    console.log(data);
                    $scope.todos = data;
                    $scope.todoName = "";
                    $scope.todoTask = "";
                });
            };
        };
        /*
            // $http.get("/api/todos/").then(function(response){
            //  $scope.todos = response.data;
            // });

            // $scope.removeTodo = function(todoId){
            //  $http.delete("/api/todos/"+todoId).then(function(response){
            //      $scope.todos = response.data;   
            //  });
            // };



            // $scope.post = function(){
            //  $http.post('/api/todos', {name: $scope.todoName, task: $scope.todoTask}).then(function(response){
            //      // console.log(response);
            //      $scope.todos = response.data;
            //  });
            //  $scope.todoName = "";
            // };
        */
        angular.module("TodoApp").controller("TaskController", ['$scope', '$http', 'api', TaskController]);

    })();