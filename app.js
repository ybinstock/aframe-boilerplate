var express = require('express');
var app = express();
//Middleware
app.get('index.html', function(req, res) {
  console.log('this is working')
});

app.listen(process.env.PORT || 3000, function() {
  console.log("listening on 3000");
});