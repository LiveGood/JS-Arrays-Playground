

function customKeys(arr) {
  return (function* () {
    for (let index in arr) {
      yield parseInt(index);
    }
  })()
}

module.exports = customKeys;

function testFunc() {
  let arr = [1, 2, 3]
  const iterator = arr.keys();

  console.log(iterator.next())
  console.log(iterator.next())
  console.log(iterator.next())

  const iterator2 = customKeys(arr);

  console.log(iterator2.next())
  console.log(iterator2.next())
  console.log(iterator2.next())
}
// testFunc()
