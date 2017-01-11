var http = require('http')
var concat = require ('concat-stream')

urls = [ process.argv[2], process.argv[3], process.argv[4] ]

function getThis (arr, count) {
  var url = urls[count]
  http.get(url, function (response) {
    response.setEncoding('utf8')
    response.pipe(concat(function (data) {
      console.log(data)
      if (count < arr.length) {
        getThis(arr, count + 1)
      }
    }))
  })
}

getThis(urls, 0)
