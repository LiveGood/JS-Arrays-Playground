const checkIfArray = require("./helpers/checkIfArray");

const customReverse = function(arr) {
  checkIfArray(arr)

  let newArr = [];
  let startIndex = 0;
  for (let endIndex = arr.length - 1; endIndex >= 0; endIndex--) {
    newArr[startIndex] = arr[endIndex]
    startIndex++;
  }

  return newArr;
}

module.exports = customReverse;
