// move zeros to the left side of array
const a = [0, 2, 5, 6, 0, 3, 5, 0];

const moveZeroToLeft = arr => {
  let arrZero = [];
  let arrOthers = [];
  arr.forEach((item, index) => {
    item === 0 ? arrZero.push(0) : arrOthers.push(item);
  });
  const finalArr = arrZero.concat(arrOthers);
  console.log('finalArr', finalArr);
};

moveZeroToLeft(a);
