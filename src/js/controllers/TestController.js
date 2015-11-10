angular.module('drive_zombify')
    .controller('TestController', ['handleAuthResult', 'parameters', function(handleAuthResult, parameters){
        var checkAuth = function() {
            gapi.auth.authorize(
                {
                    'client_id': parameters.client_id,
                    'scope': parameters.scopes.join(' '),
                    'immediate': true
                }, handleAuthResult);
        };
    }]);