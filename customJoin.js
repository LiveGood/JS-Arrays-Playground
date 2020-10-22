const contextProvider = require("./helpers/contextProvider");

const customJoin = function(arr, str) {
  let returnStr = "";
  if (!Array.isArray(arr)) {
    throw new TypeError(`${arr} is not an array.`)
  }
  if (!arr.length) {
    return returnStr;
  }

  for (let i = 0; i < arr.length; i++) {
    if (i == arr.length - 1) {
      returnStr += arr[i]
      break;
    }
    returnStr += arr[i] + str;
  }

  return returnStr;
}

module.exports = customJoin