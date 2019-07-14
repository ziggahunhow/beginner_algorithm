// fibonacci sequence, [1,1,2,3,5,8,13,21]
// no recursion
const fib = num => {
  let arr = [1, 1];
  for (let i = 2; i < num; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[num - 1];
};
fib(8);

//recursion
const recurFib = num => {
  //recur 8 = recur 6 + recur 7
  if (num <= 2) return 1;
  return recurFib(num - 1) + recurFib(num - 2);
};
recurFibRes = recurFib(8);
console.log('recurFibRes', recurFibRes);

// Dynamic programming
const dynamicFib = num => {
  //recur 8 = recur 6 + recur 7
  let arr = [1, 1];
  for (let i = 2; i < num; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[num - 1];
};

const dynamicFibRes = dynamicFib(8);
console.log('dynamicFibRes', dynamicFibRes);
