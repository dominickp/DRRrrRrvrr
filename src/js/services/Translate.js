angular.module('drive_zombify')
    .service('Translator', ['$http', 'Parameters', function($http, Parameters){
        var svc = this;

        var service_url = Parameters.translation_api_url;

        svc.translate = function(query, callback){
            $http.get(service_url + query)
                .then(function(response) {
                    svc.users = response.data;
                });
            if(callback){
                callback();
            }
        };


    }]);