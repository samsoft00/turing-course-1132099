/**
 * List Node Object
 * https://repl.it/@ZhangMYihua/merge-multi-level-doubly-linked-list#index.js
 */
class ListNode {
  constructor(val, next = null, prev = null, child = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
    this.child = child;
  }
}

// ---- Generate our linked list ----
const nodes = [1, [2, 7, [8, 10, 11], 9], 3, 4, [5, 12, 13], 6];

/*
[1,     3,      4,      6];
 |              |
[2, 7, 9]       [5, 12, 13]
    |
    [8, 10, 11]
*/

const buildMultiLevelNode = function (nodes) {
  let head = new ListNode(nodes[0]);
  let currentNode = head;

  for (let i = 1; i < nodes.length; i++) {
    const val = nodes[i];
    let nextNode;

    if (Array.isArray(val)) {
      nextNode = buildMultiLevelNode(val);
      currentNode.child = nextNode;
      continue;
    }

    nextNode = new ListNode(val);
    currentNode.next = nextNode;
    nextNode.prev = currentNode;
    currentNode = nextNode;
  }
  return head;
};

const printListMulti = (head) => {
  if (!head) {
    return;
  }

  console.log(head.val);

  if (head.child) {
    printListMulti(head.child);
  }

  printListMulti(head.next);
};

// --------- Our solution -----------
const flatten = function (head) {
  if (!head) return head;
  let currentNode = head;

  while (currentNode !== null) {
    if (currentNode.child === null) {
      currentNode = currentNode.next;
    } else {
      let tail = currentNode.child;
      while (tail.next !== null) {
        tail = tail.next;
      }

      tail.next = currentNode.next;
      if (tail.next !== null) {
      }

      currentNode.next = currentNode.child;
      currentNode.next.prev = currentNode;
      currentNode.child = null;
    }
  }
  return head;
};

const multiNode = buildMultiLevelNode(nodes);
printListMulti(flatten(multiNode));
