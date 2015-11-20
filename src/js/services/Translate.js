angular.module('drive_zombify')
    .service('Translator', ['$http', 'Parameters', '$q', function($http, Parameters, $q){
        var svc = this;

        var service_url = Parameters.translation_api_url;

        svc.translate = function(query, callback){
            //$http.get(service_url + query)
            //    .then(function(response) {
            //        console.log(response.data.message);
            //
            //        //return response.data.message;
            //        callback(response.data.message);
            //
            //    });


            //var lines = query.split('\n');
            //var translatedComplete = '';
            //
            //var gets = new Array();
            //
            //for(var i = 0;i < lines.length;i++){
            //
            //
            //    //svc.translateLine(lines[i], function(translatedLine){
            //    //    translatedComplete += translatedLine + '\n';
            //    //});
            //
            //    gets.push($http.get(service_url + lines[i]));
            //
            //
            //}
            //
            //
            //$q.all([
            //    gets
            //]).then(function(results) {
            //    /* your logic here */
            //    console.log('RESULTS');
            //    console.log(results);
            //});
            //
            //
            //callback(translatedComplete);

            var linearized = query.replace(/(\r\n|\n|\r)/gm,"");

            svc.translateLine(linearized, function(translatedLine){
               callback(translatedLine);
            });

        };

        svc.translateLine = function(query, callback){
            $http.get(service_url + query)
                .then(function(response) {
                    console.log(response.data.message);

                    //return response.data.message;
                    callback(response.data.message);

                });

        };

        //svc.translateNew = function(query, callback){
        //    $http.get(service_url + query)
        //        .then(function(response) {
        //            console.log(response.data.message);
        //
        //            //return response.data.message;
        //            callback(response.data.message);
        //
        //        });
        //
        //
        //
        //};


    }]);