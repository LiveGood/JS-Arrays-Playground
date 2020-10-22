// Array.prototype.customPop = function() {
//   const result = this[this.length-1]
//   this.length = this.length - 1;
//   return result;
// }

module.export = function customPop(arr) {
  const result = arr[arr.length-1]
  arr.length = arr.length - 1;
  return result;
}

