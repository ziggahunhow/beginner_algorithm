// Leetcode #665
const checkPossibility = function(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      if (count > 0) return false;
      if (nums[i - 1] > nums[i + 1]) {
        nums[i + 1] = nums[i];
      }
      count++;
    }
  }
  return true;
};

const res = checkPossibility([2, 3, 3, 2, 4]);
console.log('res', res);
