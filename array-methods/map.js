const contextProvider = require("../helpers/contextProvider");

const customMap = function(arr, cb, thisArg) {
  cb = contextProvider(arr, cb, thisArg)
  
  let returnArr = [];
  arr.forEach((value, index) => {
    returnArr[index] = cb(value, index);
  })
  
  return returnArr;
}

module.exports = customMap;
