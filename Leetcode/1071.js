const gcdOfStrings = function(str1, str2) {
  const s1 = str1.length <= str2.length ? str1 : str2;
  const s2 = str1.length > str2.length ? str1 : str2;
  let res = '';
  for (let i = 0; i < s1.length; i++) {
    if (s2[i] === s1[i]) res = res + s1[i];
  }
  while (
    (str1.length % res.length != 0 || str2.length % res.length != 0) &&
    res.length > 0
  ) {
    res = res.slice(0, -1);
  }
  return res;
};

const res = gcdOfStrings('leet', 'code');
console.log('res2', res);

// str1 = "ABCABC", str2 = "ABC"
// output "ABC"
