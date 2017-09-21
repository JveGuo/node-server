const express = require('express');
// 中间件
const expressStatic = require('express-static');

var server = express();
server.listen(8080);

var users = {
  "jve": 123,
  "guo": 234
};

server.get('/login', function (req, res) {
  var user = req.query['user'];
  var pwd = req.query['pwd'];
  if (!users[user]) {
    res.send({ ok: false, msg: '此用户不存在' });
  } else {
    if(users[user]!=pwd){
      res.send({ok:false,msg:'密码不正确'});
    }else{
      res.send({ok:true,msg:'成功'});
    }
  }
});
server.use(expressStatic('./www'));