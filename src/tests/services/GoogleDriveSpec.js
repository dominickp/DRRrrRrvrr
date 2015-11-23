describe('google drive service', function(){

    var googleDriveService, $httpBackend, documentService;

    var fileContentsMock = 'Mocked document contents';

    beforeEach(function(){
        module('drive_zombify');

        module(function($provide){
            $provide.service('GoogleDrive', function(){
                var svc = this;
                svc.getFileContents = function(fileId, callback){
                    documentService.contents = fileContentsMock;
                    if(callback){
                        callback(fileContentsMock);
                    }
                };
            });
        });

        inject(function($injector){
            googleDriveService = $injector.get('GoogleDrive');
            documentService = $injector.get('Document');
        });

    });

    describe("getFileContents", function(){
        it("should get some contents", function(){
            var contents = '';
            googleDriveService.getFileContents('XYZ_ID', function(response){
                contents = response;
            });

            expect(contents).not.toBe('');
            expect(contents).toBe(fileContentsMock);
        });
        it("should set the contents of the Document service", function(){
            googleDriveService.getFileContents('ABC_ID');

            expect(documentService.contents).toBe(fileContentsMock);
        });

    });

});