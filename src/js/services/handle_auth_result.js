angular.module('drive_zombify')
    .service('handleAuthResult', function(authResult){
        var authorizeDiv = document.getElementById('authorize-div');
        if (authResult && !authResult.error) {
            // Hide auth UI, then load client library.
            authorizeDiv.style.display = 'none';
            console.log('NO ERROR');
            loadDriveApi();
        } else {
            // Show auth UI, allowing the user to initiate authorization by
            // clicking authorize button.
            authorizeDiv.style.display = 'inline';
            console.log('ERROR');
        }
    });