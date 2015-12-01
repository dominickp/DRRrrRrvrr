describe('oauth button directive', function(){
    var directiveEl, compile, scope;
    //var $httpBackend;
    beforeEach(function(){
        module('templates', 'drive_zombify');
        inject(function($compile, $rootScope){
            compile = $compile;
            scope = $rootScope.$new();

        });

        scope.beginDriveAuthorization = function(){
            return 1;
        };

        var element = angular.element('<div><button ng-click="beginDriveAuthorization()">Authorize</button></div>');
        directiveEl = compile(element)(scope);
        scope.$digest();

    });
     it("should have an authorize button", function(){
        var el = directiveEl.find('button');
        expect(el).toBeDefined();
        expect(el.text()).toBe('Authorize');
    });
});