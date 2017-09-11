const http = require('http');
const urlLib = require('url');

http.createServer(function(req,res){

  var obj = urlLib.parse(req.url ,true);
  var url = obj.pathname;
  var get = obj.query;

  console.log(url, get);

}).listen('8080');