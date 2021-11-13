const contextProvider = require("../helpers/contextProvider");

const customEvery = function(arr, cb, thisArg) {
  cb = contextProvider(arr, cb, thisArg)

  for (let i = 0; i < arr.length; i++) {
    if (!cb(arr[i], i)) return false;
  }

  return true;
}

module.exports = customEvery
