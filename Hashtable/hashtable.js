class HashTable {
  constructor(size) {
    this.arr = new Array(size);
    this.size = size;
    console.log(this.arr);
  }

  hash(key) {
    let index = 0;
    for (let i = 0; i < key.length; i++) {
      index += key.charCodeAt(i);
    }
    return index % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    this.arr[index] = value;
  }

  get(key) {
    const index = this.hash(key);
    return this.arr[index];
  }

  print() {
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i]) {
        console.log(i, this.arr[i]);
      }
    }
  }
}

const table = new HashTable(50);
table.set("name", "sanooj");
table.set("age", 22);
table.set("placeeeeeeeeeee", "pkd");
console.log(table.get("name"));
table.print();
