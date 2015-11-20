var app = angular.module('drive_zombify', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
            })
            .when('/files', {
                templateUrl: 'templates/files.html',
                controller: 'ListController',
                controllerAs: 'lc'
            })
            .when('/view', {
                templateUrl: 'templates/document.html',
                controller: 'DocumentController',
                controllerAs: 'dc'
            })
            .when('/directive', {
                templateUrl: 'templates/directive.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
