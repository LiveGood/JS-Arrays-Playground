const customMap = require('./customMap');
const customFilter = require('./filter');

let arr = [1, 2, 3, 4 ,5]
console.log(customMap(arr, val => val * 2));
console.log(customFilter(arr, val => val > 2));