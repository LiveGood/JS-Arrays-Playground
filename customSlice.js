// Array.prototype.customSlice = function(start, end) {
//   if (start > this.length) {
//     return this;
//   } else if (end > this.length) {
//     end = this.length;
//   }

//   let newArr = [];
//   let i = 0;
//   while (start < end) {
//     newArr[i] = this[start];
//     start++;
//     i++;
//   }

//   return newArr;
// }

const customSlice = function(arr, start, end) {
  if (start > this.length) {
    return this;
  } else if (end > this.length) {
    end = this.length;
  }

  let newArr = [];
  let i = 0;
  while (start < end) {
    newArr[i] = arr[start];
    start++;
    i++;
  }

  return newArr;
}



const testFunc = function() {
  let arr =  [1, 2, 3, 4 , 5]
  // Custom slice result
  let newArr = [...arr]
  newArr = customSlice(newArr, 1, 6);
  console.log(`Array.prototype.customSlice() returns: [${newArr}]`);
  // Original .slice resutl
  newArr = [...arr]
  newArr = newArr.slice(1, 6);
  console.log(`Array.prototype.slice() returns: [${newArr.toString()}]`);
  console.log(arr);

  // [1, 2, 3, 4 , 5]
// slice(1, 2)
// [1, 3, 3, 4, 5]
// [1, 3, 4, 4, 5]
}
// testFunc()

