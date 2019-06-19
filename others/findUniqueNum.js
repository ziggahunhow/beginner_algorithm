// find the number that has appeared only once
const b = [3, 1, 1, 2, 3];

const findUniqueNum = arr => {
  let obj = {};
  let answer;
  arr.forEach((num, index) => {
    const numString = num.toString();
    !obj[numString]
      ? (obj = { ...obj, [numString]: 1 })
      : (obj = { ...obj, [numString]: 2 });
  });
  Object.keys(obj).forEach(item => (obj[item] === 1 ? (answer = item) : null));
  console.log('answer', answer);
  return answer;
};
findUniqueNum(b);
