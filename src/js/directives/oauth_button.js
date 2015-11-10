angular.module('drive_zombify')
    .directive('oauthButton', [function(){
        return {
            scope: {
            },
            templateUrl: 'templates/oauth_button.html'
        };
    }]);