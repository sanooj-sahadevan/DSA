class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class Binarysearch {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const node = new Node();
  let curr = this.root

    if (!this.root) return (this.root = node);

    while (curr) {
      if (curr.value > value) {
        if (!curr.left) return (curr.left = node);
        else curr = curr.left;
      } else {
        if (!curr.right) return (curr.right = node);
        else curr = curr.right;
      }
    }
  }
}

const bst = new Binarysearch();
console.log(bst.isEmpty());
bst.insert(1)
bst.insert(2)

