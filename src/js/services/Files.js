angular.module('drive_zombify').service('Files', [function() {
    var svc = this;

    svc.files = [];

    svc.addFile= function(file){
        svc.files.push({title:file.title, id:file.id});
        console.log('File added:  '+file.title);
    };

}]);