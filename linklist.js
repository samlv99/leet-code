class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class linkList {
  constructor() {
    this.head = null;
  }

  push(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
  }
}
