(function(){


    var app = angular.module("TodoApp", ['ui.router']);

    app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    	//the following removes the hash in url (with a bug....)
    	/*
    	$locationProvider.html5Mode({
    		enabled:true,
    		requireBase: false
    	});*/

        $urlRouterProvider.otherwise("/current");

        $stateProvider
            .state("current", {
                url: "/current",
                templateUrl: "templates/current.html",
                controller: "CurrentTaskController"
            })
            .state('completed',{
            	url:'/completed',
            	templateUrl: 'templates/completed.html',
            	controller: 'CompletedTaskController'
            });

    });

})();
