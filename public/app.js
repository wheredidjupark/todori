(function() {


    var app = angular.module("TodoApp", ['ui.router']);

    app.config(function($stateProvider) {

    	$stateProvider
    	.state("current",{
    		url: "/current",
    		templateUrl: "templates/current.html",
    		controller: "TaskController"
    	});

});

})();
