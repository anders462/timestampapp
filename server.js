'use strict';
var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 4000));

app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.get('/', function(req,res){
  res.send("index.html");
});

app.listen(app.get('port'), function(){
  console.log("server is running on port 4000...");
});
