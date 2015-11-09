angular.module('drive_zombify')
    .directive('oauthButton', function(){
        return {
            scope: {
                //post:'=',
                //body:'='
            },
            templateUrl: 'templates/oauth_button.html'
        };
    });