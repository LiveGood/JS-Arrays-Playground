const contextProvider = require("./helpers/contextProvider");

const customForEach = function(arr, cb, thisArg) {
  cb = contextProvider(arr, cb, thisArg)

  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i)
  }
}

module.exports = customForEach;

