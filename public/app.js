(function(){


    var app = angular.module("TodoApp", ['ui.router']);

    app.config(function($stateProvider, $urlRouterProvider) {

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
