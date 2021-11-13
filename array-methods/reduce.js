const checkIfArray = require("../helpers/checkIfArray");
const shift = require('./shift');

const customReduce = function(arr, cb, initial, passedContext) {
  checkIfArray(arr)

  const context = passedContext || this;
  const boundCallback = cb.bind(context);

  let index = -1;
  function reduce(initial) {

    if (arr.length) { 
      const nextElement = shift(arr);
      return reduce(boundCallback(initial, nextElement, ++index))
    }

    return initial;
  }
  return reduce(initial);
};

// const arr = [1, 2, 3]
// const result = customReduce(arr, function (prev, next, index) {
//   return prev + next;
// }, 0, {is: 'this?'})
// console.log('res:', result);

module.exports = customReduce;
