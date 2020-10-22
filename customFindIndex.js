const contextProvider = require("./helpers/contextProvider");

const customFindIndex = function(arr, cb, thisArg) {
  cb = contextProvider(arr, cb, thisArg)

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i)) return i;
  }

  // will return undefined anyway but explicit return reads better
  return undefined;
}

module.exports = customFindIndex;
