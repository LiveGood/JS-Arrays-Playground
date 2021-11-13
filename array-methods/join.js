const checkIfArray = require("../helpers/checkIfArray");

const customJoin = function(arr, str) {
  checkIfArray(arr)
  
  let returnStr = "";
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

module.exports = customJoin;
