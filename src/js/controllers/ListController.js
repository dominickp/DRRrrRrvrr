angular.module('drive_zombify')
    .controller('ListController', ['Files', 'GoogleDrive', 'Document', function(FilesSvc, GoogleDrive, DocumentSvc){
        //console.log('HELLOOOO');

        var vm = this;

        vm.files = FilesSvc.files;

        vm.document = DocumentSvc;


        vm.viewFile = function(fileId){
            GoogleDrive.getFileContents(fileId);
            vm.document = DocumentSvc;
        };

    }]);