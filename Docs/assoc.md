# assoc

String → a → {k: v} → {k: v}

## Function Parameters

(prop)
The property name to set

(val)
The new value

(obj)
The object to clone

Returns (Object) A new object equivalent to the original except for the changed property.

## Function Technical Explanation

Makes a shallow clone of an object, setting or overriding the specified property with the given value.
Note that this copies and flattens prototype properties onto the new object as well.
All non-primitive properties are copied by reference.

## Examples
```javascript
R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
```
