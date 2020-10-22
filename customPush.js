

module.exports = function push(arr, newItem) {
  arr[arr.length] = newItem;
  return arr.length;
}