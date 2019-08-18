// reference: https://medium.com/@desolution/%E5%BE%9Eleetcode%E5%AD%B8%E6%BC%94%E7%AE%97%E6%B3%95-4-6a631eb50da3
// reference 2: https://skyyen999.gitbooks.io/-leetcode-with-javascript/content/questions/21md.html

// iterative solution
const mergeTwoLists = (l1, l2) => {
  if (!l1) return l2;
  if (!l2) return l1;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

// recursive solution
const mergeTwoLists = (l1, l2) => {
  const dum = new ListNode(0);
  let prev = dum;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }
  if (!l1) prev.next = l2;
  if (!l2) prev.next = l1;

  return dum.next;
};
