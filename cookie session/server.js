const express = require("express");
const cookieParser = require("cookie-parser");

var server = express();

//cookie

server.use(cookieParser('asddsad'));    //读取

server.use('/',function(req,res){
  // 签名
  req.secret = 'asddsad';
  res.cookie('user','jve',{signed:true});

  //删除

  // res.clearCookie('user');

  res.send('ok');
});

server.listen(8080);