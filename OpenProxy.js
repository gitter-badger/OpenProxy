var http = require('http');
var url = require('url');
var request = require('request');

http.createServer(onRequest).listen(3000);

function onRequest(req, res) {

    var queryData = url.parse(req.url, true).query;
    if (queryData.url) {
        request({
            url: queryData.url
        }).on('error', function(e) {
            res.end("Incorrect URL please Add ?url=[your_url] To Your URL");
        }).pipe(res);
    }
    else {
        res.end("?url=[your_url]");
    }
}
