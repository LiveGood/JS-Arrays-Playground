const checkIfArray = require("../helpers/checkIfArray");

const customInsert = function(arr, index, newElement) {
  checkIfArray(arr)
  if (index >= arr.length) {
    arr[index] = newElement;
  };

  const lastValue = arr[arr.length - 1];
  const lastIndex = arr.length
  const startIndex = index + 1;
  let nextValue = arr[index];
  
  for(let i = startIndex; i < lastIndex; i++) {
    const prev = arr[i];
    arr[i] = nextValue;
    nextValue = prev;
  }

  // Add the new element and the last
  arr[index] = newElement;
  arr[lastIndex] = lastValue;
}

// var arr = [1, 3, 4, 5, 6, 7];
// customInsert(arr, 1, 2);
// console.log(arr);

module.exports = customInsert;
