const addToArrayForm = function(A, K) {
  let carry = 0;
  for (let i = A.length - 1; i >= 0; i--) {
    A[i] = A[i] + (K % 10);
    if (carry !== 0) A[i] = A[i] + carry;
    if (A[i] > 9) {
      A[i] = A[i] - 10;
      carry = 1;
    } else carry = 0;
    K = Math.floor(K / 10);
  }
  if (K !== 0) {
    if (carry !== 0) {
      K = K + carry;
      carry = 0;
    }
    const b = Array.from(String(K), Number);
    A = b.concat(A);
  }
  if (carry !== 0) {
    A = [1].concat(A);
  }
  return A;
};

const res = addToArrayForm([6], 809);
console.log('res', res);

// A = [9,9,9,9,9,9,9,9,9,9], K = 1
