var isPowerOfThree = function(n) {
  if (n / 3 === 1 || n === 1) return true;
  if (n % 3 !== 0 || n === 0) return false;
  return isPowerOfThree(n / 3);
};
const res = isPowerOfThree(0);
console.log('res', res);
