# pick

[k] → {k: v} → {k: v}

## Function Parameters

(names)
an array of String property names to copy onto a new object

(obj)
The object to copy from

Returns (Object) A new object with only properties from `names` on it.

## Function Technical Explanation

Returns a partial copy of an object containing only the keys specified. If the key does not exist, the property is ignored.

## Examples
```javascript
R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
```
