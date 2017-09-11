const http = require('http');
const fs = require('fs');

var server = http.createServer(function (req, res) {
  var fileName = './www' + req.url;

  fs.readFile(fileName, function (err, data) {
    if (err) {
      res.write('404');
    } else {
      res.write(data);
    }

    res.end();
  });
});

server.listen('8888');