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
