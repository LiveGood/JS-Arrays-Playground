const checkIfArray = require("./helpers/checkIfArray");

const customValues = function(arr) {
  checkIfArray(arr)

  return (function* () {
    for (let value of arr) {
      yield value
    }
  })()
}

module.exports = customValues;
  