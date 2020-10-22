
module.exports = function checkIfArray(arr) {
  if (!Array.isArray(arr)) {
    throw TypeError(`${arr} is not an array`)
  }
}