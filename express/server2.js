const express = require('express');
const bodyParser = require('body-parse');

var server = express();
server.listen(8080);

server.use(bodyParser.urlencoded({
  extend: true,             //扩展模式
  limit: 2*1024*1024        //限制
}));

server.use('/',function(req,res){
  console.log(req.body);
});

// req.query   get
// req.body    post