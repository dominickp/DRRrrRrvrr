# DRRrrRrvrr

## Overview
This application allows the user to authenticate with Google Drive API to view Google Docs in their drive. When selected, the user can view the contents of the Doc and convert it to Zombie which uses an API. 


## Install

- npm install
- bower install
- gulp
- Add src/js/services/Parameters.js with these contents:

```js
angular.module('drive_zombify').value('Parameters', {
    client_id: 'GOOGLE_DRIVE_API_CLIENT_ID',
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    translation_api_url: 'http://ancient-anchorage-9224.herokuapp.com/zombify?q='
});
```
- Load http://localhost:8080/
