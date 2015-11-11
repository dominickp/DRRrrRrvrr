angular.module('drive_zombify')
    .directive('oauthButton', ['GoogleDrive', function(GoogleDrive){

        var authorizeClick = function(){
            console.log('Hello');
            GoogleDrive.handleAuthClick();
        };

        return {
            link: function($scope, $element){
                $scope.beginDriveAuthorization = function(){
                    authorizeClick();
                };
            },
            templateUrl: 'templates/oauth_button.html'
        };
    }]);