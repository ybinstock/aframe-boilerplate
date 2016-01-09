var express = require('express'),
    app     = express(),
    server  = require('http').createServer(app);

server.listen(process.env.PORT || 3000, function() {
  console.log('server started');
});