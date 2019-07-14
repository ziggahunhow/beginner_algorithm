// recursion practice

// factorial, given number return num * (num - 1)... *3 * 2 *1
// no recursion
let facAnswer = 1;
const fac = num => {
  while (num !== 0) {
    facAnswer *= num;
    num -= 1;
  }
};
fac(5);
console.log('facAnswer', facAnswer);

// with recursion
// factorial = num * (factorial (num - 1))
const recurFac = num => {
  if (num === 1) return 1;
  return num * recurFac(num - 1);
};
const recurFacRes = recurFac(5);
console.log('recurFacRes', recurFacRes);

// sorted list problem
function recur(l1, l2, ls) {
  console.log('l2', l2.next);
  console.log('l1', l1.next);
  let newl1 = l1;
  let newl2 = l2;
  if (!l1.next || !l2.next) return ls;
  if (l1.val >= l2.val) {
    ls.push(l1.val);
    newl1 = l1.next;
  }
  if (l2.val > l1.val) {
    ls.push(l2.val);
    newl2 = l2.next;
  }
  return recur(newl1, newl2, ls);
}

const mergeTwoLists = function(l1, l2) {
  let ls = [];
  const res = recur(l1, l2, ls);
};
