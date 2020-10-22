// Array.prototype.removeAtIndex = function(index, makeShorter) {
//   if (!makeShorter) {
//     this[index] = undefined;
//     return;
//   }

//   for(let i = index; i < this.length; i++) {
//     this[i] = this[i+1];
//   }
//   this.length = this.length - 1;
// }

module.export = function removeAtIndex(arr, index, makeShorter) {
  if (!makeShorter) {
    arr[index] = undefined;
    return;
  }

  for(let i = index; i < arr.length; i++) {
    arr[i] = arr[i+1];
  }
  arr.length = arr.length - 1;
}