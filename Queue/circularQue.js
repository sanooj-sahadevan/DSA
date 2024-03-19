class Circular {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.currlength = 0;
    this.capacity = capacity;
    this.front = -1;
    this.rear = -1;
  }

  isFull() {
    return this.currlength === this.capacity;
  }
  isempty() {
    return this.currlength === 0;
  }

  size() {
    return this.currlength;
  }
  print() {
    if (this.isempty()) {
      console.log("bye");
    } else {
      let str = "";
      let i;

      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + "";
      }
      str += this.items[i];
      console.log(str);
    }
  }

  eq(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currlength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }
  dq() {
    if (this.isempty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.currlength -= 1;
    this.front = (this.front + 1) % this.capacity;

    if (this.isempty()) {
      this.front = -1;
      this.rear = -1;
    }

    return item;
  }
  peek() {
    return this.items[this.front];
  }
}

const cir = new Circular(5);
cir.eq(1);
cir.eq(2);
cir.eq(3);
cir.dq(1);
console.log(cir.peek());
// console.log(cir.isempty());
// console.log(cir.isFull());
// console.log(cir.size());
cir.print();
