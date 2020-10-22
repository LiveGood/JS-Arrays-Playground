const checkIfArray = require("./helpers/checkIfArray");

const customShift = function(arr) {
  checkIfArray(arr)
  return arr.slice(1);
}

module.exports = customShift;
