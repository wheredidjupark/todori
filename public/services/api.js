(function() {

    var api = function($http) {

        var getTodo = function() {
            return $http.get("/api/todos/").then(function(response) {
                return response.data;
            });
        };

        var removeTodo = function(todoId){
        	return $http.delete("/api/todos/"+todoId).then(function(response){
        		return response.data;
        	});
        };

        var postTodo = function(todoObj){
        	return $http.post("/api/todos/", todoObj).then(function(response){
        		return response.data;
        	});
        };

        var putTodo = function(todoId, todoObj){
        	return $http.put('/api/todos'+todoId, todoObj).then(function(response){
        		return response.data;
        	});
        };


        return {
        	getTodo: getTodo,
        	removeTodo: removeTodo,
        	postTodo: postTodo
        };
    };

    angular.module("TodoApp").factory("api", api);
})();
