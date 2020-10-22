const contextProvider = require("./helpers/contextProvider");

const customFind = function(arr, cb, thisArg) {
  cb = contextProvider(arr, cb, thisArg)

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i)) return arr[i];
  }

  // will return undefined anway but explicit return reads better
  return undefined;
}

module.exports = customFind;
