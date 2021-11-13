const contextProvider = require("../helpers/contextProvider");

const customSome = function(arr, cb, thisArg) {
  cb = contextProvider(arr, cb, thisArg)

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i)) return true;
  }

  return false;
}

module.exports = customSome;
