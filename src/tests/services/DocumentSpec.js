describe('document service', function(){

    var document;

    beforeEach(function(){
        module('drive_zombify');

        inject(function($injector){
            document = $injector.get('Document');
        });

    });

    describe("setContents", function(){
        it("should update the contents", function(){
            var previousContents = document.contents;
            var newContents = 'New document contents test.';
            document.setContents(newContents);

            expect(previousContents).not.toBe(document.contents);
            expect(document.contents).toBe(newContents);
        });

    });

});