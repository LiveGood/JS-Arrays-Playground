const contextProvider = require("./helpers/contextProvider");

const customFilter = function(arr, cb, thisArg) {
  cb = contextProvider(arr, cb, thisArg)
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i)) {
      newArr.push(arr[i])
    } 
  }

  return newArr;
}

module.exports = customFilter

function testFunc() {
  const arr = ['a', 2, 3, 4, 5, 6];
  let jsFilteredArray = arr.filter(value => value > 3);
  let customFilteredArray = arr.customFilter(value => value > 3);
  console.log(jsFilteredArray);
  console.log(customFilteredArray);
  console.log(areArraysEqual(jsFilteredArray, customFilteredArray));
}
// testFunc()

// Array.prototype.customFilter = function(callback) {
//   let newArr = [];

//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i)) {
//       newArr.push(this[i])
//     } 
//   }

//   return newArr;
// }
