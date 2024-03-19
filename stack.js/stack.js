class Stack {
  constructor(capacity) {
    this.item = [];
    this.capacity = this.capacity;
  }

  push(element) {
    return this.item.push(element);
  }
  pop() {
    return this.item.pop();
  }
  print() {
    console.log(this.item);
  }
}

const stack = new Stack(5);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.pop()
stack.print()
