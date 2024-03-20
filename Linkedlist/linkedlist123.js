class Node {
  constructor(value) {
    this.next = null;
    this.prev - null;
    this.value = value;
  }
}

class Linkedlist {
  constructor() {
    this.head - null;
    this.tail = null;
    this.size = null;
  }

  unshift(value) {
    const node = new Node(value);
    if (this.size > 0) {
      this.head.prev = node;
      node.next = this.head;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.head = node;
    this.size++;
  }

  push(value) {
    const node = new Node(value);
    if (this.size > 0) {
      this.tail.next = node;
      node.prev = this.tail;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.size++;
  }

  insert(value, index) {
    const node = new Node(value);
    if (this.size < 0) {
      this.head = node;
      this.tail = node;
    } else {
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      node.next = curr.next;
      node.prev = curr;
      curr.next.prev = node;
      curr.next = node;
    }
    this.size++;
  }
  remove(index) {
    if (this.size < 0) {
      this.head = null;
      this.tail = null;
    } else {
      let curr = this.head;
      for (let i = 0; i < index; i++) {
        curr = curr.next;
      }
      curr.next.prev = curr.prev;
      curr.prev.next = curr.next;
      curr = null;
    }
    this.size++;
  }

  print() {
    let curr = this.head;
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  }
}

const list = new Linkedlist();
list.unshift(4);
list.unshift(3);
list.unshift(2);
list.unshift(1);
list.push(5);
list.push(6);
list.insert(3, 4);
list.remove(2);
list.print();
