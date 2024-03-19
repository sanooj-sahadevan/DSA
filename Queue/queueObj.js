class Que {
  constructor() {
    this.item = {};
    this.front = 0;
    this.rear = 0;
  }

  eq(element) {
    this.item[this.rear] = element;
    this.rear++;
  }

  print() {
    return console.log(this.item);
  }
  dq() {}
  peek() {
    return this.item[this.front];
  }
  isEmpty() {
    return this.rear - this.front === 0;
  }
  size() {
    return this.rear - this.front;
  }
}

const qu = new Que();
qu.eq(1);
qu.eq(2);
console.log(qu.peek());
console.log(qu.isEmpty());
console.log(qu.size());
qu.print();
