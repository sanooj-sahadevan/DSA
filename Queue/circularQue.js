class CircularQue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.front = -1;
    this.rear = -1;
    this.capacity = capacity;
    this.currlength = 0;
  }
  isFull() {
    return this.capacity === this.currlength;
  }

  isEmpty() {
    return this.currlength === 0;
  }

  size() {
    return this.currlength;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currlength ++;
      if (this.front === -1) {
        this.front = this.rear;
      }
    } else {
      console.log("Bye Bye");
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Bye Bye");
    } else {
      const item = this.items[this.front];
      this.items[this.front] = null;
      this.front = (this.front + 1) % this.capacity;
      this.currlength -= 1;
      if (this.isEmpty()) {
        this.front = -1;
        this.rear = -1;
      }
    }
  }
  peek() {
    return this.items[this.front];
  }
  print() {
    if (this.isEmpty()) {
      console.log("empty da");
    } else {
      let str = "";
      let i;

      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

const queue = new CircularQue(5);
// console.log(queue.isFull());
// console.log(queue.isEmpty());
// console.log(queue.size());
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
console.log(queue.peek());
queue.print();
