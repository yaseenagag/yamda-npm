# memoize

(*… → a) → (*… → a)

## Function Parameters

(fn)
The function to memoize.

Returns (function) Memoized version of `fn`.

## Function Technical Explanation

Creates a new function that, when invoked, caches the result of calling fn for a given
argument set and returns the result. Subsequent calls to the memoized fn with the same
argument set will not result in an additional call to fn; instead, the cached result
for that set of arguments will be returned.

## Examples
```javascript
var count = 0;
var factorial = R.memoize(n => {
  count += 1;
  return R.product(R.range(1, n + 1));
});
factorial(5); //=> 120
factorial(5); //=> 120
factorial(5); //=> 120
count; //=> 1
```
