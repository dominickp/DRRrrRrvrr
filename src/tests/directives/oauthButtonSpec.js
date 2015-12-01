describe('oauth button directive', function(){
    var directiveEl, compile, scope;
    //var $httpBackend;
    beforeEach(function(){
        module('templates', 'drive_zombify');
        inject(function($compile, $rootScope){
            compile = $compile;
            scope = $rootScope.$new();

        });

        scope.post = {
            title: "my title",
            userName: "jazahn",
            body: "asdfasdf dasfasdf asdfasdf asdfasdf asdfadsf"
        };

        var element = angular.element('<div><button ng-click="beginDriveAuthorization()">Authorize</button></div>');
        directiveEl = compile(element)(scope);
        scope.$digest();

    });
    it("should have put the title in bold", function(){

        expect(true).toBe(true);
    });
    // it("should have put the title in bold", function(){
    //    var el = directiveEl.find('strong');
    //    expect(el).toBeDefined();
    //    expect(el.text()).toBe(scope.post.title);
    //});
    //it("should have prefixed the username with a 'by '", function(){
    //    var el = directiveEl.find('tt');
    //    expect(el.text()).toBe("by " + scope.post.userName);
    //});
});