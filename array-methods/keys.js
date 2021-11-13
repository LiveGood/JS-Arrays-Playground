const checkIfArray = require("../helpers/checkIfArray");

const customKeys = function(arr) {
  checkIfArray(arr)

  return (function* () {
    for (let index in arr) {
      yield parseInt(index);
    }
  })()
}

module.exports = customKeys;
