const threeSum = function(nums) {
  const sorted = nums.sort((a, b) => a - b);
  console.log('sorted', sorted);
  const arr = [];
  let index = 0;
  while (index < sorted.length - 2) {
    let index2 = index + 1;
    let index3 = sorted.length - 1;
    const remain = 0 - sorted[index];
    while (index2 < index3) {
      let continueWhile = false;
      if (index2 === index3) continueWhile = true;

      const sum = sorted[index2] + sorted[index3];
      if (!continueWhile) {
        if (
          sum === remain &&
          sorted[index - 1] !== sorted[index] &&
          sorted[index3] !== sorted[index3 + 1]
        ) {
          arr.push([sorted[index], sorted[index2], sorted[index3]]);
          console.log('index2', index2);
        }
      }

      if (remain >= sum) index2 += 1;
      if (remain <= sum) index3 -= 1;
    }
    index += 1;
  }
  return arr;
};

const res = threeSum([0, 0, 0, 0]);
console.log('res', res);
