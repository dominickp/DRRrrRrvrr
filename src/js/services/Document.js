angular.module('drive_zombify').service('Document', [function() {
    var svc = this;

    svc.contents = '';

    svc.setContents = function(data){
        svc.contents = data;
        console.log('data');
        //console.log(data);
    };

}]);