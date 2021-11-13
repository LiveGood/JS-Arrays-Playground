const checkIfArray = require("../helpers/checkIfArray");
const shift = require('./shift')
const customReduce = function(arr, cb, initial, passedContext) {
  checkIfArray(arr)

  const context = passedContext || this;
  function reduce(initial) {
    return arr.length ? reduce(cb.bind(passedContext)(initial, shift(arr))) : initial;
  }
  return reduce(initial);
};

const arr = [1, 2, 3]
const result = customReduce(arr, function (prev, next) {
  return prev + next;
}, 0, {is: 'this?'})

console.log(result);

module.exports = customReduce;
