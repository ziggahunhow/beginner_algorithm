// recursive solution, excees time limit!!!
const tribonacciRecur = function(n) {
  if (n <= 0) return 0;
  if (n <= 2) return 1;
  return (
    tribonacciRecur(n - 1) + tribonacciRecur(n - 2) + tribonacciRecur(n - 3)
  );
};

const tribonacci = function(n) {
  if (n <= 0) return 0;
  if (n <= 2) return 1;
  let arr = [0, 1, 1];
  const count = 0;
  for (let i = 3; i <= n; i++) {
    arr.push(arr[i - 3] + arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
};

const res = tribonacci(25);
console.log('res', res);

// Input: n = 5
// Output: 7
// Explanation:
// T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4
// T_5 = 1 + 2 + 4 = 7

// Input: n = 25
// Output: 1389537
