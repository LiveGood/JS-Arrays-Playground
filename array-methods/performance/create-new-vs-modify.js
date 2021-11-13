
const fillArray = (length) => {
  const arr = [];
  for (let i = 0; i < length; i++)  {
    arr.push({ a: 5, b: 100, c: '1231231' });
  }

  return arr;
}

var arr = fillArray(100);

// Do N additions of a element in 100 elements array
const N = 100000;
const arrLength = arr.length;
// push
const pushPerformance = () => {
  var hrstart = process.hrtime();
  for (let i = 0; i < N; i++)  {
    arr.push({ a: 5, b: 100, c: '1231231' });
  }
  var hrend = process.hrtime(hrstart)
  console.info(`100,000 .push() additions to array. Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000);
}

var arr = fillArray(100);
// ad at next index
const nextIndexPerformance = () => {
  var hrstart = process.hrtime();
  for (let i = 0; i < N; i++)  {
    arr[arrLength + i] = { a: 5, b: 100, c: '1231231' };
  }
  var hrend = process.hrtime(hrstart)
  console.info(`100,000 additions to next index. Execution time (hr):    %ds %dms`, hrend[0], hrend[1] / 1000000)
}
// spread old array and add new value at end
var arr = fillArray(100);
const spreadPerformance = () => {
  var hrstart = process.hrtime();
  for (let i = 0; i < N; i++)  {
    arr = [...arr, i];
  }
  var hrend = process.hrtime(hrstart)
  console.info(`100,000 additions with spread of previous elements. Execution time (hr): %ds %dms`, hrend[0], hrend[1] / 1000000)
}

// VERY FAST between 10ms-12ms
pushPerformance();
// VERY FAST between 8ms-15ms
nextIndexPerformance();
// DON'T USE... average 38s-42s
// spreadPerformance();
