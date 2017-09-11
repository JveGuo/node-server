const http = require('http');
const querystring = require('querystring');

var server = http.createServer(function (req, res) {

  var get = {};

  if (req.url.indexOf('?') >= 0) {
    var arr = req.url.split('?');
    var url = arr[0];
    get = querystring.parse(arr[1]);

  } else {
    var url = req.url;
  }
  console.log(url);
  console.log(get);
});

server.listen('8080');