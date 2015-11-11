angular.module('drive_zombify')
    .directive('oauthButton', ['GoogleDrive', function(GoogleDrive){
        return {
            scope: {
            },
            controller: function($scope, $element){

            },
            link: function($scope, $element){

                $scope.beginDriveAuthorization = function(){
                    console.log('Hello');
                    GoogleDrive.handleAuthClick();
                };

            },
            templateUrl: 'templates/oauth_button.html'
        };
    }]);