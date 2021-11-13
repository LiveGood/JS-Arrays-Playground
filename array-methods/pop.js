const checkIfArray = require("../helpers/checkIfArray");

const customPop = function(arr) {
  checkIfArray(arr)

  const result = arr[arr.length-1]
  arr.length = arr.length - 1;
  return result;
}

module.exports = customPop;
