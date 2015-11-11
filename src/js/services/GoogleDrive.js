angular.module('drive_zombify')
    .service('GoogleDrive', ['Parameters', 'Files', function(Parameters, Files){

        var svc = this;

        svc.addFile = function(file){
            Files.files.push({title:file.title, id:file.id});
            console.log('File added:  '+file.title);
        };

        /**
         * Check if current user has authorized this application.
         */
        svc.checkAuth = function() {
            gapi.auth.authorize(
                {
                    'client_id': Parameters.client_id,
                    'scope': Parameters.scopes.join(' '),
                    'immediate': true
                }, svc.handleAuthResult);
        };

        /**
         * Handle response from authorization server.
         *
         * @param {Object} authResult Authorization result.
         */
        svc.handleAuthResult = function(authResult) {
            var authorizeDiv = document.getElementById('authorize-div');
            if (authResult && !authResult.error) {
                // Hide auth UI, then load client library.
                authorizeDiv.style.display = 'none';
                svc.loadDriveApi();
            } else {
                // Show auth UI, allowing the user to initiate authorization by
                // clicking authorize button.
                authorizeDiv.style.display = 'inline';
            }
        };

        /**
         * Initiate auth flow in response to user clicking authorize button.
         *
         * @param {Event} event Button click event.
         */
        svc.handleAuthClick = function(event) {
            gapi.auth.authorize(
                {client_id: Parameters.client_id, scope: Parameters.scopes, immediate: false},
                svc.handleAuthResult);
            return false;
        };

        /**
         * Load Drive API client library.
         */
        svc.loadDriveApi = function() {
            gapi.client.load('drive', 'v2', svc.listFiles);
        };

        /**
         * Print files.
         */
        svc.listFiles = function() {
            var request = gapi.client.drive.files.list({
                'maxResults': 10
            });

            request.execute(function(resp) {
                var files = resp.items;
                if (files && files.length > 0) {
                    for (var i = 0; i < files.length; i++) {
                        var file = files[i];
                        console.log(file.title + ' (' + file.id + ')');

                        // Push into files service
                        svc.addFile(file);

                        //console.log(Files);
                    }
                } else {
                }
            });
        };






    }]);