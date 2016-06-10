var express = require('express');
var restful = require('node-restful');
var path = require("path");
var bodyParser = require("body-parser");
//var ObjectID = mongodb.ObjectID;

var CONTACTS_COLLECTION = "contacts";

var app = express();
// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/app'));
app.use(bodyParser.json());

app.use("/api", require(__dirname + "/routes/api"));

var mongoose = restful.mongoose;

mongoose.connect ("mongodb://heroku_pc49m558:eqrdmf59c4t23ghstf5r5d0r69@ds013024.mlab.com:13024/heroku_pc49m558", function (err, database) {
    if(err) {
        console.log(err);
        process.exit(1);
    }

    console.log("Database Connection Ready");

    var port = process.env.PORT;

    var server = app.listen (port, function(){
        var port = server.address().port;
        console.log(server.address());
        console.log("http://localhost:" + port )
    });
});
