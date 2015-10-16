(function(){
    angular.module('TodoApp').directive('todoForm',function(){
        return {
            restrict: 'E',
            templateUrl: '/templates/todoForm.html'
        };
    });
})();