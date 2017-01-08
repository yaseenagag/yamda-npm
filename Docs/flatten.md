# flatten

[a] → [b]

Number → Number → Number

## Function Parameters

(list)
The array to consider.

Returns (Array) The flattened list.

## Function Technical Explanation

Returns a new list by pulling every item out of it (and all its sub-arrays) and putting them in a new array, depth-first.

## Examples
```javascript
R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
```
