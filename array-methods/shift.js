const checkIfArray = require("../helpers/checkIfArray");
const _ = require('lodash');

_.remove(arr)
const customShift = function(arr) {
  checkIfArray(arr)
  const res = arr[0];
  arr = arr.slice(1, arr.length);
  console.log('inside arr:', arr);
  return res;
}

var outArr = [1, 2, 3];
customShift(outArr);
console.log('outside arr:', outArr);
module.exports = customShift;
