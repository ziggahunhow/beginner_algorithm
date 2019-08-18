// binary search
const search = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;
  let mid;
  while (low <= high) {
    mid = Math.round((low + high) / 2);
    if (arr[mid] > target) high = mid - 1;
    else if (arr[mid] < target) low = mid + 1;
    else return mid;
  }
  return -1;
};
const res = search([-1, 0, 3, 5, 9, 12], 2);
console.log('res', res);
