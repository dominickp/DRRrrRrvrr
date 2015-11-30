angular.module('drive_zombify')
    .controller(
        'DocumentController', ['Document', 'GoogleDrive', '$location', 'Translator', '$routeParams',
                        function(DocumentSvc, GoogleDrive, $location, TranslatorSvc, $routeParams){
        console.log('Hello DocumentController');

        var vm = this;

        vm.$routeParams = $routeParams;

        //GoogleDrive.checkAuth();

        vm.document = DocumentSvc;

        vm.params = $location.search();


        if(vm.params.id && vm.params.l === 'zombie'){
            GoogleDrive.getFileContents(vm.params.id, function(){
                console.log('Translate current document');
                TranslatorSvc.translate(vm.document.contents, function(translatedContents){
                    vm.document.contents = translatedContents;
                        console.log(vm.document.contents);
                });


            });
        } else if(vm.params.id){
            GoogleDrive.getFileContents(vm.params.id);
        }
        //vm.viewFile = function(fileId){
        //};

    }]);