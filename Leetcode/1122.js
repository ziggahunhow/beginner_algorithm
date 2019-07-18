const relativeSortArray = function(arr1, arr2) {
  let obj = {};
  let leftoverArr = [];
  let res = [];
  for (let i = 0; i < arr2.length; i++) {
    obj = { ...obj, [arr2[i]]: 0 };
    // console.log('obj', obj);
  }
  for (let i = 0; i < arr1.length; i++) {
    if (Object.keys(obj).includes(arr1[i].toString())) {
      obj = { ...obj, [arr1[i]]: ++obj[arr1[i]] };
    } else {
      leftoverArr.push(parseInt(arr1[i]));
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (obj[arr2[i]]) {
      for (let j = 0; j < obj[arr2[i]]; j++) {
        res.push(parseInt(arr2[i]));
      }
    }
  }
  leftoverArr.sort((a, b) => a - b);
  return res.concat(leftoverArr);
};

const res = relativeSortArray(
  [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
  [2, 1, 4, 3, 9, 6]
);
console.log('res', res);
// Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// Output: [2,2,2,1,4,3,3,9,6,7,19]

// check how many numbers in arr2, put in obj
// obj = {...obj, [number]: count} - count = occurrances in arr1
// rest of els saved in another arr
// in new arr, add these els based on the obj's order
// sort and add the arr of unused els at the end
