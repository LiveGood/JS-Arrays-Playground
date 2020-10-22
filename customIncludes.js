const contextProvider = require("./helpers/contextProvider");

const customIncludes = function(arr, cb, thisArg) {
  cb = contextProvider(arr, cb, thisArg)
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i)) return true;
  }

  // will return undefined anway but explicit return reads better
  return flase;
}

module.exports = customIncludes