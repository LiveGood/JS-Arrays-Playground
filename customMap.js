const contextProvider = require("./helpers/contextProvider");

const customMap = (arr, cb, thisArg) => {
  cb = contextProvider(arr, cb, thisArg)
  
  let returnArr = [];
  arr.forEach((value, index) => {
    returnArr[index] = cb(value, index);
  })
  
  return returnArr;
}

module.exports = customMap

const testFunc = function({description, array, cb, thisArg}) {
  let resultArr1, resultArr2;
  
  // Native map function
  try {
    resultArr1 = array.map(cb, thisArg ? thisArg : null);
  } catch (err) {
    resultArr1 = [err.name, err.message]
  }
  // Custom map function
  try {
    resultArr2 = customMap(array, cb, thisArg ? thisArg : null);
  } catch (err) {
    resultArr2 = [err.name, err.message]
  }
  
  console.log(`Description: ${description}`)
  console.log(resultArr1);
  console.log(resultArr2);
}

const tests = [
  {
    description: 'Multiply by 2',
    array: [1, 2, 3, 4, 5],
    cb: function(val) {
      return val * 2;
    },
    thisArg: null
  },
  {
    description: 'Capitalize',
    array: ['abc', 'Hello', 'bye', 'greAt'],
    cb: function(val) {
      return val.toUpperCase()
    },
    thisArg: null
  },
  {
    description: 'Sorting an array of arrays and mapping it new objects.',
    array: [[12, 46, 35], [1, 10, 3], ['abc', 'zawr', 'jfsdlkjf']],
    // In order to use 'this' in the callback, we need to define it with function not an arrow. 
    cb: function(val, index) {       //-----> RIGHT!
    // cb: (val, index) => {         //-----> WRONG!
        return {
          [this[index]]: val.sort()
        }
    },
    thisArg: ['symbols', 'symbols2', 'strings']
  },
  {
    description: 'Expect TypeError for callback',
    array: [],
    cb: 'Error'
  },
  {
    description: 'Expect TypeError for array',
    array: 123,
    cb: () => {}
  }
]

// tests.forEach(test => {
//   testFunc({...test});
// })







