const checkIfArray = require("../helpers/checkIfArray");

const removeAtIndex = function(arr, index, makeShorter = true) {
  checkIfArray(arr)
  if (index >= arr.length) return;

  if (!makeShorter) {
    arr[index] = undefined;
    return;
  }

  // 1. Move all elements from index values with one back
  // 2. Remove the last element
  // Equals: Element at index is removed
  for(let i = index; i < arr.length; i++) {
    arr[i] = arr[i+1];
  }
  arr.length = arr.length - 1;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
removeAtIndex(arr, 10);
console.log(arr);

module.exports = removeAtIndex; 
