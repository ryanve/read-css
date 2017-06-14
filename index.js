const fs = require('fs')
const css = require('css')
const path = require('path')
const parse = (buffer, file) => css.parse(String(buffer), { source: file })

const read = function(file, cb) {
  const abs = path.resolve(file)
  const flow = buffer => parse(buffer, file)
  return typeof cb == 'function' ? fs.readFile(abs, function(err, buffer) {
    err ? cb(err) : cb(err, flow(buffer))
  }) : flow(fs.readFileSync(abs))
}

module.exports = read;
