

// TODO: Fix splice
/* TODO: Add
  sort,
  reduceRight,
  flat,
  flatMap,
  fill
*/
/* TODO: Add my own: 
    findAll -> get all indexes of given value
    DONE: compact -> remove all falsy values
    drop -> remove many items from the beginning
    dropRight -> remove many items from the end   
    head -> return first index
    nth -> get element of an array, possible if negative
*/

const _ = {
  entries: require('./array-methods/entries'),
  every: require('./array-methods/every'),
  filter: require('./array-methods/filter'),
  find: require('./array-methods/find'),
  findIndex: require('./array-methods/findIndex'),
  forEach: require('./array-methods/forEach'),
  includes: require('./array-methods/includes'),
  indexOf: require('./array-methods/indexOf'),
  join: require('./array-methods/join'),
  keys: require('./array-methods/keys'),
  lastIndexOf: require('./array-methods/lastIndexOf'),
  map: require('./array-methods/map'),
  pop: require('./array-methods/pop'),
  push: require('./array-methods/push'),
  shift: require('./array-methods/shift'),
  some: require('./array-methods/some'),
  slice: require('./array-methods/slice'),
  unshift: require('./array-methods/unshift'),
  values: require('./array-methods/values'),
  removeAtIndex: require('./array-methods/removeAtIndex'),
  insert: require('./array-methods/insert'),
  reverse: require('./array-methods/reverse'),
  compact: require('./array-methods/compact')
};

// console.log(_);

module.exports = _;
