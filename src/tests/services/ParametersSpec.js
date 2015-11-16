describe('parameters service', function(){

    var parameters;

    beforeEach(function(){
        module('drive_zombify');

        inject(function($injector){
            parameters = $injector.get('Parameters');
        });

    });

    it("should have a client_id", function(){
        expect(parameters.client_id).toBeDefined();
        expect(typeof(parameters.client_id)).toBe('string');

    });

    it("should have a scopes", function(){
        expect(parameters.scopes).toBeDefined();
        expect(typeof(parameters.scopes)).toBe('object');
    });

    it("should have a translation_api_url", function(){
        expect(parameters.translation_api_url).toBeDefined();
        expect(typeof(parameters.translation_api_url)).toBe('string');
    });


});