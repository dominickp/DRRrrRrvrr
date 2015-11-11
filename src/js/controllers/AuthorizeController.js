angular.module('drive_zombify')
    .controller('AuthorizeController', ['GoogleDrive', function(GoogleDrive){
        //console.log('HELLOOOO');

        var vm = this;

        vm.authorizeClick = function(){
            //console.log('Clicked!');
            //
            //GoogleDrive.handleAuthClick();
        }

    }]);