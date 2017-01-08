# reject

Filterable f => (a → Boolean) → f a → f a

## Function Parameters

(pred)

(filterable)

Returns (Array)

## Function Technical Explanation

The complement of filter.
Acts as a transducer if a transformer is given in list position.

## Examples
```javascript
var isOdd = (n) => n % 2 === 1;

R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]

R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
```
