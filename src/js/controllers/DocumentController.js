angular.module('drive_zombify')
    .controller(
        'DocumentController', ['Document', 'GoogleDrive', '$location', 'Translator',
                        function(DocumentSvc, GoogleDrive, $location, TranslatorSvc){
        //console.log('HELLOOOO');

        var vm = this;

        //GoogleDrive.checkAuth();

        vm.document = DocumentSvc;

        vm.params = $location.search();

        if(vm.params.id && vm.params.l == 'zombie'){
            GoogleDrive.getFileContents(vm.params.id, function(){
                console.log('Translate current document');
                vm.document.contents = TranslatorSvc.translate(vm.document.contents);
            });
        } else if(vm.params.id){
            GoogleDrive.getFileContents(vm.params.id);
        }
        //vm.viewFile = function(fileId){
        //};

    }]);