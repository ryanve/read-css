
# read-css
Read a CSS file into an AST. AST format is from the [`css.parse`](https://www.npmjs.com/package/css) method. Methods work like `fs.readFile` and `fs.readFileSync`. If you supply a callback, method will be async. If not, method will be sync.

## install
```
npm install read-css
```

## usage

```
const read = require('read-css')
```

### sync usage

```js
read('example.css') // tree
```

### async usage

```js
const callback = (err, data) => {
  if (err) throw err
  console.log(JSON.stringify(data, null, 2))
}

read('example.css', callback)
```

## output

```js
const read = require('read-css')
read('test.css')
```

[View sample AST output in `test.json`](test.json)

## develop

```
npm install
npm test
```

## related

[reap-css](https://www.npmjs.com/package/reap-css)
