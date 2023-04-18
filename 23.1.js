function mergeKLists(lists) {
  if (lists === undefined || lists.length === 0) return null;

  return mergeLists(lists, 0, lists.length - 1);
}

function mergeLists(lists, start, end) {
  if (start === end) {
    return lists[start];
  }

  let mid = start + parseInt((end - start) / 2);

  let left = mergeLists(lists, start, mid);

  let right = mergeLists(lists, mid + 1, end);

  return merge(left, right);
}

function merge(left, right) {
  const head = ListNode(-1);
  let temp = head;

  while (left !== null && right !== null) {
    if (left.val < right.val) {
      temp.next = left;
      left = left.next;
    } else {
      temp.next = right;
      right = right.next;
    }

    temp = temp.next;
  }

  if (left !== null) {
    temp.next = left;
  }

  if (right !== null) {
    temp.next = right;
  }

  return head.next;
}
