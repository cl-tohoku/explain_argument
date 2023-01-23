var http = require('http');
var _table = require('./table');
var _index = require('./index');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(_index.head());
  res.write(_index.debBody());
  res.write(_table.refTable());
  res.write(_index.endBody());
  res.end();
}).listen(8080);