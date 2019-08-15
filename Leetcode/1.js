// two sums
// given [2, 11, 7, 15], target = 9
const twoSum = (arr, target) => {
  let result;
  let hashT = {};
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const diff = target - num;
    if (Object.keys(hashT).includes(diff.toString()) && hashT[diff] !== i) {
      result = [i, hashT[diff]];
    }
    hashT = { ...hashT, [num]: i };
  }
  console.log('result', result);
};
twoSum([2, 11, 7, 15], 9);
