var http = require('http');
var url = require('url');

var server = http.createServer((req, res) => {
  var sendObj = {
    url: req.url,
    name: 'test'
  };
  var callback = url.parse(req.url, true).query.callback || 'callback';
  res.write(`${callback}(${JSON.stringify(sendObj)})`);
  res.end();
});

server.listen(9999, () => {
  console.log('started.')
});