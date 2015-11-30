angular.module('drive_zombify')
    .directive('oauthButton', ['GoogleDrive', '$window', '$location', '$route', '$timeout', function(GoogleDrive, $window, $location, $route, $timeout){

        var authorizeClick = function(){
            console.log('Hello');
            GoogleDrive.handleAuthClick();

            var params = $location.search();
            // Check if ID already set
            if(params.id){
                //$location.url = '/#/view?id='+$location.search().id+'&l=human';
                //$location.path = '/#/view?id='+$location.search().id+'&l=human';
                //GoogleDrive.getFileContents(params.id);
                //$window.location.href = '/#/view?id='+params.id+'&l=human';

                $timeout(function() {
                    $route.reload(); // Only way I was able to get this to work
                }, 1000);

            } else {
                // Redirect to show files template
                $window.location.href = '/#/files';
            }


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