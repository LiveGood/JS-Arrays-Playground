const checkIfArray = require("../helpers/checkIfArray");

const removeAtIndex = function(arr, index, makeShorter) {
  checkIfArray(arr)
  
  if (!makeShorter) {
    arr[index] = undefined;
    return;
  }

  for(let i = index; i < arr.length; i++) {
    arr[i] = arr[i+1];
  }
  arr.length = arr.length - 1;
}

module.exports = removeAtIndex; 
