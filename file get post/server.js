const http = require('http');
const fs = require('fs');
const queryString = require('queryString');
const urlLib = require('url');

var server = http.createServer(function (req, res) {
  // GET
  var obj = urlLib.parse(req.url, true);
  var url = obj.pathname;
  const GET = obj.query;

  // POST
  var str = '';
  req.on('data', function (data) {
    str += data;
  });
  req.on('end', function () {
    const POST = queryString.parse(str);
  });

  // file
  var fileName = './www' + url;
  fs.readFile(fileName, function (err, data) {
    if (err) {
      res.write('404');
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(8080);