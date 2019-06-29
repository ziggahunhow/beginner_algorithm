// Leetcode 1089. Duplicate Zeros
// answer source: https://www.wandouip.com/t5i326811/

const duplicateZeros = arr => {
  let zeroCnt = 0;
  // find total length of new array with additional zeros
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) zeroCnt++;
  }
  let total = zeroCnt + arr.length;
  for (let i = arr.length - 1; i >= 0; i--) {
    // ignore elements outside of original arrays length
    // note that --total in if() actually reduces total
    // use arr[total] as array's new index
    if (--total < arr.length) {
      arr[total] = arr[i];
    }
    if (arr[i] === 0 && --total < arr.length) {
      arr[total] = 0;
    }
  }
  console.log('arr', arr);
  return arr;
};

duplicateZeros([1, 0, 2, 3, 0, 4, 0, 5]);
