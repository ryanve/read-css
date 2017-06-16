const encoding = 'utf8'
const fs = require('fs')
const css = require('css')
const path = require('path')
const parse = (code, file) => css.parse(code, { source: file })

const read = function(file, cb) {
  const abs = path.resolve(file)
  const flow = code => parse(code, file)
  return typeof cb == 'function' ? fs.readFile(abs, encoding, function(err, code) {
    err ? cb(err) : cb(err, flow(code))
  }) : flow(fs.readFileSync(abs, encoding))
}

module.exports = read;
