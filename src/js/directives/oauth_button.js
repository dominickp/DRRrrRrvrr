angular.module('drive_zombify')
    .directive('oauthButton', ['Authorize', function(Authorize){
        return {
            scope: {},
            templateUrl: 'templates/oauth_button.html'
        };
    }]);