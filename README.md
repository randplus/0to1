# @randplus/0to1
In theory, the random functions in this package can also output 1.<br>
This package is included in '[randplus](https://www.npmjs.com/package/randplus)'.

###### Teams
<img src="https://raw.githubusercontent.com/randplus/docs/main/img/randplus.png" alt="OTONEKO.CAT" style="display: block; width: auto; height: 100px;"/>

## Usage
```js
const random = require('@randplus/0to1');

console.log(random.versions); // ['v1', 'v2']
console.log(random()) // Use latest random function.
console.log(random(1)); // Use v1 random function.
console.log(random('1')); // Use v1 random function.
console.log(random('v1')); // Use v1 random function.
```
