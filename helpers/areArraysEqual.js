const customEvery = require('../customEvery')

module.exports = function areArraysEqual(arr1, arr2) {
  return customEvery(arr1, (value, index) => value == arr2[index])
}