const checkIfArray = require("./helpers/checkIfArray");

const customEntries = function(arr) {
  checkIfArray(arr)

  return (function* () {
    for (let index in arr) {
      yield  [parseInt(index), arr[index]]
    }
  })()
}

module.exports = customEntries;
  