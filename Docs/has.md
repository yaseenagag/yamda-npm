# has

s → {s: x} → Boolean

## Function Parameters

(prop)
The name of the property to check for.

(obj)
The object to query.

Returns (Boolean) Whether the property exists.

## Function Technical Explanation

Returns whether or not an object has an own property with the specified name

## Examples
```javascript
var hasName = R.has('name');
hasName({name: 'alice'});   //=> true
hasName({name: 'bob'});     //=> true
hasName({});                //=> false

var point = {x: 0, y: 0};
var pointHas = R.has(R.__, point);
pointHas('x');  //=> true
pointHas('y');  //=> true
pointHas('z');  //=> false
```
