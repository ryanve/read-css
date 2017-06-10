
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
read.rules('example.css') // array
read.selectors('example.css') // array
```

### async usage

```js
const callback = (err, data) => {
  if (err) throw err
  console.log(JSON.stringify(data, null, 2))
}

read('example.css', callback) // tree
read.rules('example.css', callback) // array
read.selectors('example.css', callback) // array
```

## output

```js
const read = require('read-css')
read('test.css')
```

```js
{
  "type": "stylesheet",
  "stylesheet": {
    "rules": [
      {
        "type": "rule",
        "selectors": [
          ".apple"
        ],
        "declarations": [
          {
            "type": "declaration",
            "property": "color",
            "value": "red",
            "position": {
              "start": {
                "line": 2,
                "column": 3
              },
              "end": {
                "line": 2,
                "column": 13
              },
              "source": "test.css"
            }
          },
          {
            "type": "declaration",
            "property": "border-radius",
            "value": "50%",
            "position": {
              "start": {
                "line": 3,
                "column": 3
              },
              "end": {
                "line": 3,
                "column": 21
              },
              "source": "test.css"
            }
          }
        ],
        "position": {
          "start": {
            "line": 1,
            "column": 1
          },
          "end": {
            "line": 4,
            "column": 2
          },
          "source": "test.css"
        }
      },
      {
        "type": "rule",
        "selectors": [
          ".orange"
        ],
        "declarations": [
          {
            "type": "declaration",
            "property": "color",
            "value": "orange",
            "position": {
              "start": {
                "line": 7,
                "column": 3
              },
              "end": {
                "line": 7,
                "column": 16
              },
              "source": "test.css"
            }
          }
        ],
        "position": {
          "start": {
            "line": 6,
            "column": 1
          },
          "end": {
            "line": 8,
            "column": 2
          },
          "source": "test.css"
        }
      }
    ],
    "parsingErrors": []
  }
}
```

## develop

```
npm install
npm test
```
