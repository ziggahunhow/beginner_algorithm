// move zeros to the left side of array
const a = [0,2,5,6,0,3,5,0];

const moveZeroToLeft = arr => {
  let arrZero = []
  let arrOthers = []
  arr.forEach((item, index) => {
    item ===0? arrZero.push(0) : arrOthers.push(item)
  })
  const finalArr = arrZero.concat(arrOthers)
  console.log('Question 1');
  console.log('finalArr', finalArr);
}

moveZeroToLeft(a)

// find the number that has appeared only once
const b = [3,1,1,2,3]

const findUniqueNum = arr => {
  let obj = {}
  let answer;
  arr.forEach((num, index) => {
    const numString = num.toString()
    !obj[numString]?
      obj = {...obj, [numString]: 1}
      : obj = {...obj, [numString]: 2}
  })
  Object.keys(obj).forEach(item => obj[item] === 1? answer = item : null )
  console.log('Question 2');
  console.log('obj', obj);
  console.log('answer', answer);
  return answer
}
findUniqueNum(b)