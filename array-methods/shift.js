const checkIfArray = require("../helpers/checkIfArray");

const customShift = function(arr) {
  checkIfArray(arr)
  const res = arr[0];
  arr = arr.slice(1, arr.length);

  return res;
}

module.exports = customShift;
