const checkIfArray = require("./helpers/checkIfArray");

const customSlice = function(arr, start, end) {
  checkIfArray(arr)

  if (start > arr.length) {
    return arr;
  } else if (end > arr.length) {
    end = arr.length;
  }

  let newArr = [];
  let i = 0;
  while (start < end) {
    newArr[i] = arr[start];
    start++;
    i++;
  }

  return newArr;
}

module.exports = customSlice;
