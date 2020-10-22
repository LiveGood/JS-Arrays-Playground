const checkIfArray = require("./helpers/checkIfArray");

const customFindIndex = function(arr, value, startIndex = 0) {
  checkIfArray(arr);
  
  if (!arr.length 
    || startIndex >= arr.length
    || typeof value !== 'string') {
    return -1;
  } 
  if (typeof startIndex !== 'number') {
    startIndex = 0;
  }
  // swap the start index if the value is negative.
  //  We have `+ startIndex` 
  // because +(-1)= -1 will be the right result
  // but -(-1) = +1 will give wrong start index
  if (startIndex < 0) {
    startIndex = arr.length - 1 + startIndex;
    if (startIndex < 0) startIndex = 0;
  }

  for (let i = startIndex; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }

  return -1; 
}

module.exports = customFindIndex