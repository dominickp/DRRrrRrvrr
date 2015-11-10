var app = angular.module('drive_zombify', []);
//
//$(document).ready(function(){
//
//
//    var action;
//    if(window.action == 'list'){
//        action = listFiles;
//    } else if(window.action = 'doc'){
//        action = displayFile;
//    }
//

//
//    /**
//     * Print files.
//     */
//    function listFiles() {
//        var request = gapi.client.drive.files.list({
//            'maxResults': 10,
//            'q': "mimeType = 'application/vnd.google-apps.document'"
//        });
//
//        request.execute(function(resp) {
//            var files = resp.items;
//            if (files && files.length > 0) {
//                for (var i = 0; i < files.length; i++) {
//                    var file = files[i];
//                    appendLink(file.id, file.title);
//                }
//            } else {
//                appendLink('', 'No files found.');
//            }
//        });
//    }
//
//    function displayFile() {
//        fileId = window.location.hash.substring(1);
//        var request = gapi.client.drive.files.get({fileId: fileId});
//
//        request.execute(function(resp) {
//            var accessToken = gapi.auth.getToken().access_token;
//
//            $.ajax({
//                url: resp.exportLinks["text/plain"],
//                type: "GET",
//                beforeSend: function(xhr){
//                    xhr.setRequestHeader('Authorization', "Bearer "+accessToken);
//                },
//                success: function( data ) {
//                    $('#output').html(data.replace(/\n/g, "<br>"));
//                }
//            });
//
//        });
//    }
//
//    /**
//     * Append a link element to the body containing the given text
//     * and a link to the /doc page.
//     *
//     * @param {string} id Id to be used in the link's href attribute.
//     * @param {string} text Text to be placed in a element.
//     */
//    function appendLink(id, text){
//        if(id != ''){
//            var li = $('<li></li>');
//            var link = $('<a></a>');
//            link.attr('href', '/doc.html#'+id);
//            link.html(text);
//            li.append(link);
//            $('#output ul').append(li);
//        } else {
//            $('#output').append(text);
//        }
//    }
//
//    $('#authorize-btn').click(handleAuthClick);
//
//
//});
