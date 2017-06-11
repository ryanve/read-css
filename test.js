var read = require('./')
var equal = require('deep-equal')

function log(data) {
  console.log(JSON.stringify(data, null, 2))
}

function ok(id, actual, correct) {
  if (equal(actual, correct)) {
    console.info('Passed', id)
  } else {
    console.error('Failed', id, actual,  ' should be ', correct)
    throw new Error
  }
}

function test(method, expected) {
  const subject = method === read ? read : read[method]
  method = method === read ? 'read-css' : method

  subject('test.css', function(err, data) {
    if (err) throw err
    ok(method + ' (async)', data, expected || data)
    log(data)
  })

  let data = subject('test.css')
  ok(method + ' (sync)', data, expected || data)
  log(data)
}

test(read)
test('rules')
test('selectors', ['.apple', '.orange'])
