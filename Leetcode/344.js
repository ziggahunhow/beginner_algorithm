var reverseString = function(s) {
  let lastIndex = s.length - 1;
  for (let i = 0; i < s.length; i++) {
    const lastEl = s[lastIndex];
    s[lastIndex] = s[i];
    s[i] = lastEl;
    if (lastIndex === i) return s;
    if (lastIndex - i === 1) {
      return s;
    }
    lastIndex--;
  }
};
const res = reverseString(['H', 'a', 'n', 'n', 'a', 'h']);
console.log('res', res);
