angular.module('drive_zombify')
    .directive('oauthButton', ['GoogleDrive', function(GoogleDrive){
        return {
            scope: {},
            templateUrl: 'templates/oauth_button.html'
        };
    }]);