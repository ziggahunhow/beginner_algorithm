// use binary search method to find 55
const biSearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;
  let mid;
  while (low <= high) {
    mid = Math.round((low + high) / 2);
    console.log('mid', mid, 'number: ', arr[mid]);
    if (arr[mid] > target) high = mid - 1;
    else if (arr[mid] < target) low = mid + 1;
    else return console.log('found:', arr[mid]);
  }
};
biSearch([5, 17, 33, 41, 55, 61, 80], 55);
