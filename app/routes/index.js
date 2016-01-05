'use strict'
var unixConv = require(process.cwd() + '/app/api/unixConv.js');

module.exports = function(app) {

//main route to serve index.html
  app.get('/', function(req,res){
      res.send("index.html");
  });

//route for all api calls
  app.get('/*', function(req,res) {
    unixConv(req.url, function(err,time){
      if (!err){
      res.send(time);
    } else {
      res.send("Error: " + err);
    }
    });
  });
};
