const checkIfArray = require("./helpers/checkIfArray");

module.exports = function customShift(arr) {
  checkIfArray(arr)
  return arr.slice(1);
}