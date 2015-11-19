# DRRrrRrvrr

## Install

Add src/js/services/Parameters.js with these contents:
`angular.module('drive_zombify').value('Parameters', {
    client_id: 'GOOGLE_DRIVE_API_CLIENT_ID',
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    translation_api_url: 'http://ancient-anchorage-9224.herokuapp.com/zombify?q='
});
