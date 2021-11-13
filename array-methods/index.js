
// TODO: Add sort, reduceRight, flat, flatMap, fill
// TODO: Fix splice
/* TODO: Add my own: 
    insert -> add element at an index 
    findAll -> get all indexes of given value
    compact -> remove all falsy values
    drop -> remove many items from the beginning
    dropRight -> remove many items from the end   
    head -> return first index
    nth -> get element of an array, possible if negative
*/
const _ = {
  entries: require('./customEntries'),
  every: require('./customEvery'),
  filter: require('./customFilter'),
  find: require('./customFind'),
  findIndex: require('./customFindIndex'),
  forEach: require('./customForEach'),
  includes: require('./customIncludes'),
  indexOf: require('./customIndexOf'),
  join: require('./customJoin'),
  keys: require('./customKeys'),
  lastIndexOf: require('./customLastIndexOf'),
  map: require('./customMap'),
  pop: require('./customPop'),
  push: require('./customPush'),
  shift: require('./customShift'),
  some: require('./customSome'),
  slice: require('./customSlice'),
  unshift: require('./customUnshift'),
  values: require('./customValues'),
  removeAtIndex: require('./removeAtIndex'),
  reverse: require('./customReverse')
}

module.exports = _ 
