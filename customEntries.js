

module.exports = function customEntries(arr) {
  return (function* () {
    for (let index in arr) {
      yield  [parseInt(index), arr[index]]
    }
  })()
}
  