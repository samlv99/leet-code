// Node class to represent a node in the linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// linkedList class to represent a linked list
class linkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Method to add a new node to the end of linked list
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Method to prepend a new node to the beginning of the linked list
  prepend(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  // Method to delete a node with the given data from the linked list
  delete(data) {
    if (!this.head) {
      return;
    }
  }
}
