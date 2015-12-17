/**
 * Created by Developer on 2015/12/17.
 */
var http = require('http');
var server = http.createServer(function(req, res){
    res.statusCode = '404';
    console.log("hello");
    res.write("goode");
    res.end("ok");

});
server.listen(8080, 'localhost');