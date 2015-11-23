describe('list controller', function() {

    var documentController, documentService, googleDriveService, scope, location;

    beforeEach(module('drive_zombify'));

    beforeEach(inject(function($controller, $rootScope, $injector, $location){
        scope = $rootScope.$new();
        documentController = $controller('DocumentController', {$scope: scope});

        location = $location;
        documentService = $injector.get('Document');
        googleDriveService = $injector.get('GoogleDrive');

        googleDriveService.getFileContents = function(id){
            return 'the_contents';
        }

    }));

    it('should have access to the Document service', function(){
        expect(documentController.document).toBe(documentService);
    });
    it('should be able to access search parameters', function(){
        expect(documentController.params).toBe(location.search());
    });
    xit('should use GoogleDrive service when id is provided', function(){

        spyOn(googleDriveService, 'getFileContents');

        expect(googleDriveService.getFileContents).not.toHaveBeenCalled();

        location.params.id = 'XYZ_ID';
        scope.$digest();

        expect(googleDriveService.getFileContents).toHaveBeenCalledWith('XYZ_ID');

        expect(documentController.params).toBe(location.search());
    });
});