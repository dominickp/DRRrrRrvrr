angular.module('drive_zombify')
    .controller('ListController', ['Files', 'GoogleDrive', 'Document', function(FilesSvc, GoogleDrive, DocumentSvc){
        //console.log('HELLOOOO');

        var vm = this;

        //GoogleDrive.checkAuth();

        vm.files = FilesSvc.files;

    }]);