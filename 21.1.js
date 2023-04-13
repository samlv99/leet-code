// c1:
function mergeTwoLists1(list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  let head = null;
  let temp = head;

  if (list1.val < list2.val) {
    temp = head = new ListNode(list1.val);
    list1 = list1.next;
  } else {
    temp = head = new ListNode(list2.val);
    list2 = list2.next;
  }

  while (list1 && list2) {
    if (list1.val < list2.val) {
      temp.next = new ListNode(list1.val);
      list1 = list1.next;
      temp = temp.next;
    } else {
      temp.next = new ListNode(list2.val);
      list2 = list2.next;
      temp = temp.next;
    }
  }

  while (list1) {
    temp.next = new ListNode(list1.val);
    list1 = list1.next;
    temp = temp.next;
  }

  while (list2) {
    temp.next = new ListNode(list2.val);
    list2 = list2.next;
    temp = temp.next;
  }

  return head;
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// c2:

function mergeTwoLists2(list1, list2) {
  const dummy = new ListNode(-1);
  let temp = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      temp.next = list1;
      list1 = list1.next;
    } else {
      temp.next = list2;
      list2 = list2.next;
    }

    temp = temp.next;
  }

  if (list1 !== null) {
    temp.next = list1;
  }

  if (list2 !== null) {
    temp.next = list2;
  }

  return dummy.next;
}
