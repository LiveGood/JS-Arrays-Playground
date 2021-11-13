const contextProvider = require("../helpers/contextProvider");

const customIncludes = function(arr, cb, thisArg) {
  cb = contextProvider(arr, cb, thisArg)

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i)) return true;
  }

  // will return undefined anway but explicit return reads better
  return false;
}

module.exports = customIncludes;
