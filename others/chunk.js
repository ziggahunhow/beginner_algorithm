function chunk(arr, target) {
  let ans = [];
  let subAns = [];
  for (let i = 0; i < arr.length; i++) {
    if (subAns.length === target) {
      ans.push(subAns);
      subAns = [];
    }
    subAns.push(arr[i]);
  }
  ans.push(subAns);
  console.log('ans', ans);
  return ans;
}
chunk([1, 2, 3, 4, 5], 2);
// [[1,2], [3,4], [5]]

function chunk2(arr, target) {
  let ans = [];
  for (let i = 0; i < Math.round(arr.length / target) * target; i += target) {
    const subAns = arr.slice(i, i + target);
    ans.push(subAns);
  }
  console.log('ans', ans);
  return ans;
}
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);
// [[1,2], [3,4], [5]]
