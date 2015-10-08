(function() {

    var api = function($http) {

        var get = function() {
            return $http.get("/api/todos/").then(function(response) {
                return response.data;
            });
        };

        var remove = function(todoId){
        	return $http.delete("/api/todos/"+todoId).then(function(response){
        		return response.data;
        	});
        };

        var post = function(todoObj){
        	return $http.post("/api/todos/", todoObj).then(function(response){
        		return response.data;
        	});
        };

        return {
        	getTodo: get,
        	removeTodo: remove,
        	postTodo: post
        };
    };

    angular.module("TodoApp").factory("api", api);
})();
