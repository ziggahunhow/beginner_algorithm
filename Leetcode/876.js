const middleNode = function(head) {
  let count = 0;
  let pointer = head;
  if (pointer.next === null) return head;
  while (pointer.next !== null) {
    count += 1;
    pointer = pointer.next;
  }
  const median = count % 2 === 0 ? count / 2 : Math.ceil(count / 2);
  console.log('count', count);
  console.log('median', median);
  if (count === 1) return head.next;
  // reset values
  count = 0;
  pointer = head;
  while (pointer.next !== null) {
    if (count === median) return pointer;
    count += 1;
    pointer = pointer.next;
  }
};
