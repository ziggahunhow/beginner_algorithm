// simple solution: check if head node exists already
const hasCycle = function(head) {
  let arr = [];
  if (!head || !head.next) return false;
  while (head.next !== null) {
    if (arr.includes(head)) {
      return true;
    } else {
      arr.push(head);
    }
    head = head.next;
  }
  return false;
};

// more advanced solution:
// have a go one step, b goes two steps. If they collide then it's a loop
const hasCycle = function(head) {
  if (!head || !head.next) return false;
  let a = head;
  let b = head.next;
  while (b && b.next && a !== b) {
    a = a.next;
    b = b.next.next;
  }
  if (!a || !b) {
    return false;
  }
  if (a === b) return true;
  return false;
};
