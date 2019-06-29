const removeDuplicates = function(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const el = nums[i];
    if (el !== nums[i + 1]) {
      nums[count] = el;
      count++;
    }
  }
  nums.splice(count, nums.length - count);
  console.log('nums', nums);
  return count;
};
removeDuplicates([5, 5, 6, 7]);
