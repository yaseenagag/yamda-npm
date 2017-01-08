# aperture

Number → [a] → [[a]]

## Function Parameters

(n)
The size of the tuples to create

(list)
The list to split into n-length tuples

Returns (Array) The resulting list of `n`-length tuples

## Function Technical Explanation

aperture Returns a new list, composed of n-tuples of consecutive elements If n is greater than the length of the list, an empty list is returned.
Acts as a transducer if a transformer is given in list position.

## Examples
```javascript
R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]

R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]

R.aperture(7, [1, 2, 3, 4, 5]); //=> []
```
