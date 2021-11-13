
// TODO: FIX THIS TOTAL MESS!

const getOriginalArray= () => {
  return [1, 2, 3, 4, 5];
}
let arr = getOriginalArray()
arr.removeAtIndex(2)
arr.removeAtIndex(2)

// TODO: Finish this mess!
Array.prototype.customSplice = function(start, removeN) {
  const concatValues = Array.from(arguments).slice(2);
  let removeLength;
  let removedElementsArray = [];

  // Done: If If their is no addition of new values
  // Done: If start is bigger then .length -> []
  // Done: removeN > this.length - start
  // If their is addition of new values
    // If the number of new values is shorted then length-start
    // If the added values is bigger then length-start => Only add
    // If end is bigger then length
  if (!concatValues.length) {
    if (start > this.length) return removedElementsArray;
    if (removeN >= this.length - start) removeLength = this.length - start
    // removeN is shorter then the array.length - start
    while (removeLength > 0) {
      removedElementsArray.push(this[start]);
      this.removeAtIndex(start);
      removeLength--;
    }

    return removedElementsArray;
  }

  // Their is concaat values
  // In this case you need only replacing without removing
  let addToEnd = this.slice(removeN+1)
  let i = start;
  let originalLength = concatValues.length;
  while (concatValues.length) {
    removedElementsArray.push(i)
    this[i] = concatValues.shift();
    i++;
  }
  
  if (originalLength > removeN) {
    addToEnd.forEach((value, index) => {
      this[this.length] = value;
    })
  }
}
// If Added elements length is shorter then the arr.length

function test(funcName, args) {
  let arr = 'abcdefghij'.split('');
  arr[funcName](...args);
  return arr;
}

let testArguments = [
  [1, 2, 'Added1', 'Added2', 5, 6 ,7, 8],
  [1, 2, 'Added1', 'Added2'],
  [1, 10],
  [10, 10],
  [3, 2]
]

let methods = ['customSplice', 'splice']
let testResults = [];
methods.forEach(funcName => {
  let i = 0;
  testArguments.forEach(testVal => {
    if (!testResults[i]) testResults[i] = {}
    testResults[i][funcName] = test(funcName, testVal);
    i++;
  })
})

const areArraysEqual = function (arr1, arr2) {
  return arr1.every((value, index) => value == arr2[index])
}

// testResults.forEach((result, index) => {
//   console.log(result[methods[0]]);
//   console.log(result[methods[1]]);
//   let equal = areArraysEqual(result[methods[0]], result[methods[1]])
//   console.log(`Correct: ${equal}`);
//   console.log('----------------------');
// })
