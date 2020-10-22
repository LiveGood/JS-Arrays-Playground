// Array.prototype.customUnshift = function(value) {
//   if (!this.length) {
//     this[0] = value;
//     return 1;
//   }
  
//   this.length = this.length + 1;
//   for (let i = this.length - 1; i >= 0; i--) {
//     this[i] = this[i - 1]
//   }
//   this[0] = value;
//   return this.length;
// }

module.exports = function customUnshift(arr, value) {
  if (!arr.length) {
    arr[0] = value;
    return 1;
  }
  
  arr.length = arr.length + 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] = arr[i - 1]
  }
  arr[0] = value;
  return arr.length;
}