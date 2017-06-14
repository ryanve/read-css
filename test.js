const fs = require('fs')
const read = require('./')
const equal = require('deep-equal')
const print = data => JSON.stringify(data, null, 2)

const ok = function(id, actual, correct) {
  if (equal(actual, correct)) console.info('Passed:', id)
  else {
    console.error('Failed:', id, actual,  ' should be ', correct)
    throw new Error
  }
}

read('test.css', function(err, data) {
  if (err) throw err
  const tree = read('test.css')

  fs.writeFile('test.json', print(tree), function(err) {
    if (err) throw err
    console.info('\nAST output printed to test.json')
  })

  ok('sync', tree instanceof Object, true)
  ok('async', data instanceof Object, true)
  ok('precision', data, tree)
});
