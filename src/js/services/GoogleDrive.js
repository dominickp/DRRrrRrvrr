angular.module('drive_zombify')
    .service(
        'GoogleDrive', ["$rootScope", 'Parameters', 'Files', 'Document', '$window',
                function($rootScope, Parameters, Files, DocumentSvc, $window
    ){

        var svc = this;

        /**
         * Check if current user has authorized this application.
         */
        svc.checkAuth = function() {
            console.log('checkAuth');
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
         * Add files to service.
         */
        svc.listFiles = function() {
            var request = gapi.client.drive.files.list({
                'maxResults': 10
            });

            request.execute(function(resp) {
                var files = resp.items;
                if (files && files.length > 0) {
                    $rootScope.$apply(function() {
                        for (var i = 0; i < files.length; i++) {
                            var file = files[i];
                            console.log(file);
                                // Push into files service
                                Files.addFile(file);
                        }
                        // Redirect to show files template
                        //$window.location.href = '/#/files';
                    });
                }
            });
        };

        svc.getFileContents = function(fileId, callback) {

            //if(typeof(gapi === undefined)){
            //    // Redirect to show homepage
            //    //$window.location.href = '/#/';
            //}

            var request = gapi.client.drive.files.get({fileId: fileId});

            request.execute(function(resp) {
                var accessToken = gapi.auth.getToken().access_token;

                $.ajax({
                    url: resp.exportLinks["text/plain"],
                    type: "GET",
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader('Authorization', "Bearer " + accessToken);
                    },
                    success: function (data) {
                        $rootScope.$apply(function() {
                            DocumentSvc.setContents(data);
                        });

                        // Callback
                        if(callback) {
                            callback();
                        }
                    }
                });
            });
        };
    }]);