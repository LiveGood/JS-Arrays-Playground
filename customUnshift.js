const checkIfArray = require("./helpers/checkIfArray");

const customUnshift = function(arr, value) {
  checkIfArray(arr)

  if (!arr.length) {
    arr[0] = value;
    return 1;
  }
  
  arr.length = arr.length + 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] = arr[i - 1]
  }
  arr[0] = value;
  return arr.length;
}

module.exports = customUnshift;