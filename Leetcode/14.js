// my solution:
const longestCommonPrefix = function(strs) {
  let count = 0;
  let pre = '';
  if (!strs[0]) {
    return strs[0] || '';
  }
  for (let i = 0; i < strs[0].length; i++) {
    const firstWordLetter = strs[0][i];
    if (strs.length === 1) return strs[0];
    for (let j = 1; j < strs.length; j++) {
      if (firstWordLetter === strs[j][i]) {
        count += 1;
        if (count === strs.length - 1) {
          pre = pre + firstWordLetter;
        }
      } else return pre;
    }
    count = 0;
  }
  return pre;
};

// referenced solution:
// https://medium.com/@desolution/%E5%BE%9Eleetcode%E5%AD%B8%E6%BC%94%E7%AE%97%E6%B3%95-2-d4189f53018e
const longestCommonPrefix = strs => {
  if (!strs || strs.length === 0) return '';
  let pre = strs[0];
  let count = 1;
  while (count < strs.length) {
    while (strs[count].indexOf(pre) !== 0) {
      pre = pre.substring(0, pre.length - 1);
    }
    count += 1;
  }
  return pre;
};
