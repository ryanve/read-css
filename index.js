const fs = require('fs')
const css = require('css')
const path = require('path')
const parse = (buffer, file) => css.parse(String(buffer), { source: file })

function method(pipe) {
  return function(file, cb) {
    const abs = path.resolve(file)
    const flow = buffer => pipe(parse(buffer, file))
    return typeof cb == 'function' ? fs.readFile(abs, function(err, buffer) {
      err ? cb(err) : cb(err, flow(buffer))
    }) : flow(fs.readFileSync(abs))
  }
}

function skim(array, key) {
  return array.reduce(function(flat, item) {
    return item[key] == null ? flat : flat.concat(item[key])
  }, [])
}

const read = method(tree => tree)
read.rules = method(tree => tree.stylesheet.rules)
read.selectors = method(tree => skim(tree.stylesheet.rules, 'selectors'))
module.exports = Object.freeze(read);
