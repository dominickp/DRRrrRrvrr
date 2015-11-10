angular.module('drive_zombify')
    .controller('TestController', ['Authorize', 'Parameters', function(HandleAuthResult, Parameters){
        //console.log('HELLOOOO');

        var vm = this;
        vm.test = function(){
          console.log('TEST CLICK');
        };
    }]);