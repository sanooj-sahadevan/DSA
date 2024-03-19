class Queue {
  constructor() {
    this.item = [];
  }

  eq(element) {
    return this.item.push(element);
  }
  dq() {
    return this.item.shift();
  }
  peek() {
    return this.item[0];
  }
  isEmpty() {
    return this.item.length === 0;
  }
  size() {
    return this.item.length;
  }
  print() {
    console.log(this.item.toString());
  }
}

const que = new Queue();
que.eq(1);
que.eq(2);
que.eq(3);
que.eq(4);
que.eq(5);
que.eq(6);
que.eq(7);
que.dq(0);
console.log(que.peek());
console.log(que.isEmpty());
console.log(que.size());
que.print();
