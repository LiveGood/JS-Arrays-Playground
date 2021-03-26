const checkIfArray = require("./helpers/checkIfArray");

const customReduce = function(arr, cb, initial) {
  checkIfArray(arr)

  let result;
  for (let key in arr) {
    result = cb(result || initial, arr[key]);
  }

  return result;
}

module.exports = customReduce;
