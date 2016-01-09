<<<<<<< HEAD
//var express = require('express');
//var ejs = require('ejs');
//var app = express();
//
//app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'html');
//
//app.get('/', function(req, res) {
//  res.render('root');
//  console.log('this is working')
//});
//
//app.listen(process.env.PORT || 3000, function() {
//  console.log("listening on 3000");
//});
=======
var express = require('express'),
    app     = express(),
    server  = require('http').createServer(app);

server.listen(process.env.PORT || 3000, function() {
  console.log('server started');
});

>>>>>>> parent of 198dd16... why isn't this working
