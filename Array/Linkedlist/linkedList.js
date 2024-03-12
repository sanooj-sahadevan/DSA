class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    }else{
      let prev = this.head 
      while(prev.next){
        prev = prev.next
      }
      prev.next = node
    }
    this.size++;
  }

insert(value, index){
  if(index<0 || index > this.size){
    return
  }
  if(index===0){
    this.prepend(value)
  }else{
    const node = new Node(value)
    let prev = this.head
    for(let i=0;i<index-1;i++){
      prev = prev.next
    }
    node.next = prev.next
     prev.next = node
     this.size++
  }
}



  print() {
    if (this.isEmpty()) {
      console.log("emty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value}`;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

const List = new LinkedList();
console.log(List.isEmpty());
console.log(List.getSize());

List.print();


List.insert(10,0)
List.print()


List.insert(20,0)
List.print()

List.insert(30,1)
List.print()
List.insert(40,2)
List.print()
List.insert(50,3)
List.print()
 console.log(List.getSize());