describe('list controller', function() {

    var listController, filesService, scope;

    beforeEach(angular.mock.module('drive_zombify'));

    beforeEach(angular.mock.inject(function($controller, $rootScope, $injector){
        scope = $rootScope.$new();
        listController = $controller('ListController', {$scope: scope});

        filesService = $injector.get('Files');

    }));

    it('should have access to the files within the Files service', function(){
        expect(listController.files).toBe(filesService.files);
    });
}); 