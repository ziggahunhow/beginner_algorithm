const defangIPaddr = function(address) {
  return address.replace(/\./g, '[.]');
};
const res = defangIPaddr('255.100.50.0');
console.log('res', res);

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"
