# range

Number → Number → [Number]

## Function Parameters

(from)
The first number in the list.

(to)
One more than the last number in the list.

Returns (Array) The list of numbers in the set `[a, b)`.

## Function Technical Explanation

Returns a list of numbers from from (inclusive) to to (exclusive).

## Examples
```javascript
R.range(1, 5);    //=> [1, 2, 3, 4]
R.range(50, 53);  //=> [50, 51, 52]
```
