angular.module('drive_zombify')
    .service('Authorize', ['Parameters', function(Parameters){

        var svc = this;


        svc.handleAuthResult = function(authResult){
            var authorizeDiv = document.getElementById('authorize-div');
            if (authResult && !authResult.error) {
                // Hide auth UI, then load client library.
                //authorizeDiv.style.display = 'none';
                console.log('Hello31');
                loadDriveApi();
            } else {
                // Show auth UI, allowing the user to initiate authorization by
                // clicking authorize button.
                //authorizeDiv.style.display = 'inline';
                console.log('Hello32');
            }
        };



        svc.checkAuth = function() {
            gapi.auth.authorize(
                {
                    'client_id': Parameters.client_id,
                    'scope': Parameters.scopes.join(' '),
                    'immediate': true
                }, svc.handleAuthResult);
        };

        svc.handleAuthClick = function(event) {
            console.log('hello51');
            gapi.auth.authorize(
                {client_id: Parameters.client_id, scope: Parameters.scopes, immediate: false},
                svc.handleAuthResult);
            return false;
        };

        /**
         * Load Drive API client library.
         */
        svc.loadDriveApi = function() {
            console.log('hello41');
            gapi.client.load('drive', 'v2', action);
        }


    }]);