var commonChars = function(A) {
  let res = [];
  let shortest = '';
  let hashT = {};
  // find shortest word
  for (let i = 0; i < A.length; i++) {
    if (i === 0) shortest = A[i];
    if (A[i].length < shortest.length) shortest = A[i];
  }
  // shortest word's hash Table count
  for (let letter = 0; letter < shortest.length; letter++) {
    const el = shortest[letter];
    hashT = {
      ...hashT,
      [el]: hashT[el] ? hashT[el] + 1 : 1
    };
  }
  for (let i = 0; i < A.length; i++) {
    if (A[i] === shortest) continue;
    let count = 0;
    for (let letter = 0; letter < A[i].length; letter++) {
      console.log('A[i]', A[i][letter]);
      // console.log('count', count);
      if (Object.keys(hashT).includes(A[i][letter])) {
        // console.log('A[i]', A[i]);
        // console.log('A[i][letter]', A[i][letter]);
        count++;
        if (count <= hashT[A[i][letter]]) {
          hashT[A[i][letter]] = count;
        }
      }
      count = 0;
    }
  }
  console.log('hashT', hashT);
};

commonChars(['cool', 'loock', 'cook']);
