'use strict';
var express = require('express');
var app = express();
var unixConv = require('./public/js/unixConv.js')

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.get('/', function(req,res){
    res.send("index.html");
});

app.get('/*', function(req,res) {
  unixConv(req.url, function(err,time){
    if (!err){
    res.send(time);
  } else {
    res.send("Error: " + err);
  }
  });

});



app.listen(app.get('port'), function(){
  console.log("server is running on port 5000...");
});
