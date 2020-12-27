class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class DoubleListNode {
  constructor(val, prev = null, next = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

const linkedList = [3, 5, 10, 9, 7, 4].reduce(
  (acc, val) => new ListNode(val, acc),
  null
);

const printList = function (head) {
  if (!head) {
    return;
  }

  console.log(head.val);
  printList(head.next);
};

/**
 * Single linked List
 * @param {*} list obj
 */
// var linkedList = function (list) {};

/**
 * Reversed single linked list
 * (2)->(1)->(9)->(10) -> null
 * reversed (10)->(9)->(1)->(2)->null
 */
var reverseLinkedList = function (head) {
  let prev = null;
  let current = head;

  while (current) {
    let next = current.next; // 9
    current.next = prev; // (1)=>(2)=> null
    prev = current; //
    current = next;
  }

  return prev;
};

/**
 *             m               n
 * (15)->(4)->(19)->(4)->(1)->(9)->(10) -> null
 */
var reverseBetweenLinkedList = function (head, m, n) {
  let currentPos = 1,
    currentNode = head;
  let start = head;

  while (currentPos < m) {
    start = currentNode;
    currentNode = currentNode.next;
    currentPos++;
  }

  let newList = null,
    tail = currentNode;
  while (currentPos >= m && currentPos <= n) {
    const next = currentNode.next;
    currentNode.next = newList;
    newList = currentNode;
    currentNode = next;
    currentPos++;
  }

  start.next = newList;
  tail.next = currentNode;

  if (m > 1) return head;
  return newList;
};

printList(linkedList);
console.log("Reversed between => 3, 5");
printList(reverseBetweenLinkedList(linkedList, 3, 5));
console.log("Reversed list => ");
printList(reverseLinkedList(linkedList));
