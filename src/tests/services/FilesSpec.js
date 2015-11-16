describe('files service', function(){

    var files;

    beforeEach(function(){
        module('drive_zombify');

        inject(function($injector){
            files = $injector.get('Files');
        });

    });

    describe("addFile", function(){
        it("should add a file", function(){
            var filesLength = files.files.length;
            files.addFile({title:"New file", fileExtension: 'doc'});

            expect(files.files.length).toBe(filesLength+1);
        });

    });

});