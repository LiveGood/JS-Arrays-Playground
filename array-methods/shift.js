const checkIfArray = require("../helpers/checkIfArray");
const _ = require('lodash');

const customShift = function(arr) {
  checkIfArray(arr)
  const res = arr[0];
  arr.splice(0, 1);
  
  return res;
}

module.exports = customShift;
