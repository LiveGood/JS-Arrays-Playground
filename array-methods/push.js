const checkIfArray = require("../helpers/checkIfArray");

const push = function(arr, newItem) {
  checkIfArray(arr)

  arr[arr.length] = newItem;
  return arr.length;
}

module.exports = push;
