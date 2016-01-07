/**
 * Created by ybinstock on 1/7/16.
 */
var express    = require('express'),
    app        = express(),
    server     = require('http').createServer(app),
    ejs        = require('ejs'),
    bodyParser = require('body-parser'),
    io         = require('socket.io').listen(server);

server.listen(process.env.PORT || 5000, function() {
  console.log('server started');
});