angular.module('drive_zombify')
    .directive('oauthButton', ['GoogleDrive', '$window', function(GoogleDrive, $window){

        var authorizeClick = function(){
            console.log('Hello');
            GoogleDrive.handleAuthClick();
            // Redirect to show files template
            $window.location.href = '/#/files';
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