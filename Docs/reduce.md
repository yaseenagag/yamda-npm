# reduce

((a, b) → a) → a → [b] → a

## Function Parameters

(fn)
The iterator function. Receives two values, the accumulator and the current element from the array.

(acc)
The accumulator value.

(list)
The list to iterate over.

Returns * The final, accumulated value.

## Function Technical Explanation

Returns a single item by iterating through the list, successively calling the iterator function
and passing it an accumulator value and the current value from the array, and then passing the
result to the next call. The iterator function receives two values: (acc, value). It may use
R.reduced to shortcut the iteration.  The arguments' order of reduceRight's iterator function
is (value, acc).  Note: R.reduce does not skip deleted or unassigned indices (sparse arrays),
unlike the native Array.prototype.reduce method. For more details on this behavior, see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
Dispatches to the reduce method of the third argument, if present.

## Examples
```javascript
R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
          -               -10
         / \              / \
        -   4           -6   4
       / \              / \
      -   3   ==>     -3   3
     / \              / \
    -   2           -1   2
   / \              / \
  0   1            0   1
```
