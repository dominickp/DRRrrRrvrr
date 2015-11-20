var app = angular.module('drive_zombify', ['ngRoute'])
    //.run(['GoogleDrive', '$rootScope', '$window',
    //
    //    function(GoogleDrive, $rootScope, $window) {
    //        console.log('Running..');
    //
    //        // These are never executed
    //        $rootScope.checkAuth = function(){
    //            console.log('rootscope checkauth called');
    //            GoogleDrive.checkAuth();
    //        };
    //        $window.checkAuth = function(){
    //            console.log('window checkauth called');
    //            GoogleDrive.checkAuth();
    //        };
    //
    //        // This executes immediately
    //        //GoogleDrive.checkAuth();
    //
    //        $window.initGapi = function() {
    //            GoogleDrive.checkAuth();
    //        }
    //
    //    }])
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
