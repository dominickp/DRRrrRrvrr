angular.module('drive_zombify')
    .controller('ListController', ['Files', function(FilesSvc){
        //console.log('HELLOOOO');

        var vm = this;

        vm.files = FilesSvc.files;

        vm.addFile = function(){
            FilesSvc.addFile({title:'TESTING'});
        };

        //console.log(FilesSvc);

    }]);