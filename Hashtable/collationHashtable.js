class HashTable {
  constructor(size) {
    this.arr = new Array(size);
    this.size = size;
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
    // if (!this.arr[index]) {
    //   this.arr[index] = [];
    // }
    const bucket = this.arr[index];

    if (!bucket) {
      this.arr[index] = [[key, value]];
    } else {
      const sameKey = bucket.find((item) => item[0] === key);
      if (sameKey) {
        sameKey[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.arr[index];
    if (bucket) {
      const sameKey = bucket.find((item) => item[0] === key);
      if (sameKey) {
        return sameKey[1];
      }
    }
    return undefined;
  }

  print() {
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i]) {
        console.log(i, this.arr[i]);
      }
    }
  }
}

const table = new HashTable(10);
table.set("name", "sanooj");
table.set("mame", "sanoojjj");
table.set("age", 22);
table.set("placeeee", "pkd");
console.log(table.get("age"));
console.log(table.get("name"));
table.print();
