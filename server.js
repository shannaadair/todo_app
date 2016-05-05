/**
 * Created by Shanna on 5/5/16.
 */
var http = require("http");
var port_number = server.listen(process.env.PORT || 3000);
http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("It's alive!");
    response.end();
}).listen(port_number);
