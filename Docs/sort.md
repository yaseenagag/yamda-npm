# sort

(a,a → Number) → [a] → [a]

## Function Parameters

(comparator)
A sorting function :: a -> b -> Int

(list)
The list to sort

Returns (Array) a new array with its elements sorted by the comparator function

## Function Technical Explanation

Returns a copy of the list, sorted according to the comparator function, which should
accept two values at a time and return a negative number if the first value is smaller,
a positive number if it's larger, and zero if they are equal. Please note that this is
a copy of the list. It does not modify the original.

## Examples
```javascript
var diff = function(a, b) { return a - b; };
R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
```
