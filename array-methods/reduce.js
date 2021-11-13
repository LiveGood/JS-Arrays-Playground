const checkIfArray = require("../helpers/checkIfArray");
const shift = require('./shift');

const customReduce = function(arr, cb, initial, passedContext) {
  checkIfArray(arr)

  const context = passedContext || this;
  let index = 0;
  function reduce(initial) {
    const boundSelfCallback = cb.bind(context);
    const nextElement = shift(arr);
    console.log(arr);

    return arr.length ? reduce(boundSelfCallback(initial, nextElement, index++)) : initial;
  }
  return reduce(initial);
};

const arr = [1, 2, 3]
const result = customReduce(arr, function (prev, next) {
  return prev + next;
}, 0, {is: 'this?'})

console.log(result);

module.exports = customReduce;
