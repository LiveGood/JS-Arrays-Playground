
module.exports = function contextProvider(arr, cb, thisArg) {
  if (!Array.isArray(arr)) {
    throw TypeError(`${arr} is not an array`)
  }
  if (typeof cb !== 'function') {
    throw TypeError(`${cb} is not a function`)
  }
  if (thisArg) {
    cb = cb.bind(thisArg);
  }

  return cb;
}