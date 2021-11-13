
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
  entries: require('./array-methods/customEntries'),
  every: require('./array-methods/customEvery'),
  filter: require('./array-methods/customFilter'),
  find: require('./array-methods/customFind'),
  findIndex: require('./array-methods/customFindIndex'),
  forEach: require('./array-methods/customForEach'),
  includes: require('./array-methods/customIncludes'),
  indexOf: require('./array-methods/customIndexOf'),
  join: require('./array-methods/customJoin'),
  keys: require('./array-methods/customKeys'),
  lastIndexOf: require('./array-methods/customLastIndexOf'),
  map: require('./array-methods/customMap'),
  pop: require('./array-methods/customPop'),
  push: require('./array-methods/customPush'),
  shift: require('./array-methods/customShift'),
  some: require('./array-methods/customSome'),
  slice: require('./array-methods/customSlice'),
  unshift: require('./array-methods/customUnshift'),
  values: require('./array-methods/customValues'),
  removeAtIndex: require('./array-methods/removeAtIndex'),
  insert: require('./array-methods/customInsert'),
  reverse: require('./array-methods/customReverse')
};

module.exports = _;
