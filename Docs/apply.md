# apply

(*… → a) → [*] → a

## Function Parameters

(fn)
The function which will be called with args

(args)
The arguments to call fn with

(Returns) * result The result, equivalent to `fn(...args)`

## Function Technical Explanation

Applies function fn to the argument list args. This is useful for creating a fixed-arity
function from a variadic function. fn should be a bound function if context is significant.

## Examples
```javascript
var nums = [1, 2, 3, -99, 42, 6, 7];
R.apply(Math.max, nums); //=> 42
```
