/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  let index = 0;
  let res = nums[index];
  let cur = nums[index];
  while (index + 1 < nums.length) {
    cur = cur + nums[index + 1];
    if (cur < 0 || cur < nums[index + 1]) cur = nums[index + 1];

    if (cur > res) res = cur;
    index += 1;
  }
  return res;
};
const res = maxSubArray([-1]);
// const res = maxSubArray([-2, 1]);
// const res = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log('res', res);
