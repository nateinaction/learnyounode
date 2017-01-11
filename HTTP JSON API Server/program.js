var http = require('http')
var url = require('url')

var port = process.argv[2]

var server = http.createServer(function (req, res) {
  var parseObj = url.parse(req.url, true)
  var route = parseObj.pathname
  var isoString = parseObj.query['iso']
  var date = new Date(isoString);
  var responseObj

  if (route === '/api/parsetime') {
    responseObj = {
      'hour': date.getHours(),
      'minute': date.getMinutes(),
      'second': date.getSeconds()
    }
  } else if (route === '/api/unixtime') {
    responseObj = {
      'unixtime': date.getTime()
    }
  }

  if (responseObj) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(responseObj))
  } else {
    res.writeHead(404)
    res.end()
  }
})

server.listen(port)
