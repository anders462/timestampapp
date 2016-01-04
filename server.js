'use strict';
var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));

app.get('/', function(req,res){
  res.send("Hello Worlds");
});

app.listen(app.get('port'), function(){
  console.log("server is running on port 5000...");
});
