var filterExtensions = require('./filterExtensions')

var dir = process.argv[2]
var ext = process.argv[3]

filterExtensions(dir, ext, function (err, data) {
  if (err) {
    console.log(err)
  }
  data.map(function (item) {
    console.log(item)
  })
})
