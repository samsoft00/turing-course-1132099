/**
 * Implement Queue with stack
 * methods
 * - Enqueue
 * - Dequeue
 * - Empty
 * - Peek
 * LIFO - stack
 * FIFO - Qeueue
 * https://repl.it/@ZhangMYihua/Create-Queue-using-stacks
 */
class QueueWithStack {
  constructor() {
    this.in = [];
    this.out = [];
  }

  enqueue(val) {
    if (Array.isArray(val)) {
      for (let i = 0; i < val.length; i++) {
        this.in.push(val[i]);
      }
    } else {
      this.in.push(val);
    }
  }

  dequeue() {
    if (this.out.length === 0) {
      while (this.in.length) {
        this.out.push(this.in.pop());
      }
    }
    return this.out.pop();
  }

  peek() {
    if (this.out.length === 0) {
      while (this.in.length) {
        this.out.push(this.in.pop());
      }
    }
    return this.out[this.out.length - 1];
  }

  empty() {
    return this.out.length === 0 && this.in.length === 0;
  }
}

const q = [1, 2, 3, 4, 5, 6, 7];

const queueWithStack = new QueueWithStack();
queueWithStack.enqueue(q);

console.log("Peek =>", queueWithStack.peek());
console.log("Dequeue =>", queueWithStack.dequeue());
console.log("Peek =>", queueWithStack.peek());
console.log("Enqueue =>", queueWithStack.enqueue(8));
