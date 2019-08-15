// solution: use an array like a stack to track the nodes,
// then pop them to reverse the order
const reverseList = function(head) {
  let arr = [];
  if (!head || !head.next) return head;
  while (head.next) {
    arr.push(head);
    head = head.next;
  }
  let tempNode = head;
  while (arr.length > 0) {
    lastNode = arr.pop();
    lastNode.next = null;
    tempNode.next = lastNode;
    tempNode = tempNode.next;
  }
  return head;
};

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

const reverseListRecur = function(head) {
  if (!head || !head.next) return head;
};
