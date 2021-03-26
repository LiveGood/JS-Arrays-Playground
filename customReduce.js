const checkIfArray = require("./helpers/checkIfArray");

const customReduce = function(arr, cb, initial) {
  checkIfArray(arr)

  let result;
  for (let key in arr) {
    result = cb(result || initial, arr[key]);
  }

  return result;
}


let arr = [1, 2, 3];
const result = customReduce(arr, (prev, val) => {
  return prev + val;
}, 0);

console.log(result);
