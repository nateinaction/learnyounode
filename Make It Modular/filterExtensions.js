var fs = require('fs')
var path = require('path')

module.exports = function (dir, ext, callback) {
  var data = []
  function filterList(err, arr) {
    if (err) {
      return callback(err)
    }
    data = arr.filter(function (item) {
      return (path.extname(item) === '.' + ext)
    })
    return callback(null, data)
  }
  fs.readdir(dir, filterList)
}
