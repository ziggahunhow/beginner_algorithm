let array = [9, 4, 3, 20, 50, 12, 399, 5, 7, 1, 6];

const bubbleSort = arr => {
  for (let index = 0; index < arr.length; index++) {
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      const nextEl = arr[index + 1];

      if (element > nextEl) {
        arr[index] = nextEl;
        arr[index + 1] = element;
      }
    }
  }
};
// bubbleSort(array);

// const selectionSort = (arr) => {
//   for (let index = 0; index < arr.length; index++) {

//   }
// }

// console.log("object", array);

const a = [
  { name: "zed" },
  { name: "bob" },
  { name: "joe" },
  { name: "apple" }
];
const sortArrOfObjs = (a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  if (b.name > a.name) {
    return -1;
  }
  return 0;
};

console.log(
  "sortArrOfObjs",
  a.sort((a, b) => {
    // console.log("a", a);
    // console.log("b", b);
    return sortArrOfObjs(a, b);
  })
);
