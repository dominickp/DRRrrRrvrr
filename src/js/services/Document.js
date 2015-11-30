angular.module('drive_zombify').service('Document', [function() {
    var svc = this;

    svc.contents = '';

    svc.title = '';

    svc.setContents = function(data){
        svc.contents = data;
        console.log('data');
        //console.log(data);
    };

    svc.setTitle = function(data){
        svc.title = data;
        console.log('data');
        //console.log(data);
    };

}]);