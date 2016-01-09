var express = require('express');
var app = express();
//Middleware
app.get('/', function(req, res) {
  res.send("Hello World");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("listening on 3000");
});