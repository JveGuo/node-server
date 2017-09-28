const jade = require('jade');
const fs = require('fs');

var str = jade.renderFile('./views/1.jade',{pretty: true});

fs.writeFile('./',str,function(err){
  if(err)
    console.log('写入失败');
})
