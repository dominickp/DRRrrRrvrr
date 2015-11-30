describe('translate service', function(){

    var $httpBackend, translateService, parametersService;
    var humanQuery = 'Hello world!';
    var zombieTranslatedQuery = 'HRRLO WORLD';


    beforeEach(module('drive_zombify'));
    beforeEach(function(){
        inject(function($injector){
            $httpBackend = $injector.get('$httpBackend');
            translateService = $injector.get('Translator');
            parametersService = $injector.get('Parameters');
        });
        $httpBackend
            .when('GET', parametersService.translation_api_url+humanQuery)
            .respond(200, {"message":"HrrllrrrRr WrrrRrRRld!"});

        console.log(parametersService.translation_api_url+humanQuery);

    });

    describe('translateLine', function(){

        it("should return a translated line", function(){

            translateService.translateLine(humanQuery, function(response){
                expect(response).toBe(zombieTranslatedQuery);
            });
        });
    });
});