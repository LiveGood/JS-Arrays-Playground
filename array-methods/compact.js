
const compact = (arr) => arr.filter((el) => !!el || el === 0);

// console.log(compact([0, 1, 2, null, undefined, false, NaN, '']));

module.exports = compact;
