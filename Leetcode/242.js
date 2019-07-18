const isAnagram = function(s, t) {
  const tArr = t.split('');
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    console.log('s[i]', s[i]);
    const index = tArr.indexOf(s[i]);
    if (index >= 0) {
      tArr.splice(index, 1);
    } else {
      return false;
    }
  }
  return true;
};

const res = isAnagram('a', 'ab');
console.log('res', res);
