const express = require("express");
const cookieParser = require("cookie-parser");
const cookieSession = require('cookie-session');

var server = express();

//cookie

server.use(cookieParser());    //读取
server.use(cookieSession({
  name:'jve',
  keys:arr,
  maxAge: 20*60*1000
}));

server.use('/',function(req,res){
/**
 * req.session
 */

 /**
  * 删除 session  ：   delete req.session
  */
  res.send('ok');
});

server.listen(8080);