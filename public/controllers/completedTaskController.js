(function() {

    var CompletedTaskController = function($scope, $http, api) {

        $http.get('/api/todos/').then(function(response) {
            $scope.todos = response.data;
        });

        $scope.removeTodo = function(todoId){
        	api.removeTodo(todoId).then(function(todos){
        		$scope.todos = todos;
        	});
        };
    };


    angular.module('TodoApp').controller('CompletedTaskController', ['$scope', '$http', 'api',CompletedTaskController]);
})();
