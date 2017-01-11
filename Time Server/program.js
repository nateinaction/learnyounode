var net = require('net')
var strftime = require('strftime')

var port = process.argv[2]

var server = net.createServer(function listener (socket) {
  var date = strftime('%F %H:%M', new Date().now) + '\n'
  socket.write(date)
  socket.end()
})

server.listen(port)
