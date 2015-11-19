describe('google drive service', function(){

    var GoogleDrive;

    beforeEach(function(){
        module('drive_zombify');

        inject(function($injector){
            GoogleDrive = $injector.get('GoogleDrive');
        });

    });

    //describe("addFile", function(){
    //    it("should add a file", function(){
    //        var filesLength = files.files.length;
    //        files.addFile({title:"New file", fileExtension: 'doc'});
    //
    //        expect(files.files.length).toBe(filesLength+1);
    //    });
    //
    //});

});