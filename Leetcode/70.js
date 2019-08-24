// // !recursive solution, will timeout however!
// const climbStairsRecur = function(n) {
//   if (n === 1) return 1;
//   if (n === 2) return 2;
//   return climbStairsRecur(n - 1) + climbStairsRecur(n - 2);
// };

// const res = climbStairsRecur(45);
// console.log('res', res);

const climbStairs = function(n) {
  const arr = [1, 2];
  if (n === 1) return arr[0];
  if (n === 2) return arr[1];
  let index = 2;
  while (index < n) {
    arr[index] = arr[index - 1] + arr[index - 2];
    index += 1;
  }
  return arr[n - 1];
};
const res2 = climbStairs(45);
console.log('res2', res2);
