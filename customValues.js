const checkIfArray = require("./helpers/checkIfArray");

const customValues = function(arr) {
  checkIfArray(arr)

  return (function* () {
    for (let index in arr) {
      yield arr[index]
    }
  })()
}

module.exports = customValues;
  