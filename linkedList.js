// Node class to represent a node in the linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// linkedList class to represent a linked list
class LinkedList {
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

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next && currentNode.next.data !== data) {
      currentNode = currentNode.next;
    }

    if (currentNode.next && currentNode.next.data === data) {
      currentNode.next = currentNode.next.next;
    }

    if (this.tail.data === data) {
      this.tail = currentNode;
    }
  }

  // Method to display the linked list as an array
  toArray() {
    let result = [];
    let currentNode = this.head;
    while (currentNode) {
      result.push(currentNode.data);
      currentNode = currentNode.next;
    }

    return result;
  }
}

const linked = new LinkedList();
linked.append(1);
linked.append(2);
linked.prepend(3);
linked.delete(2);
console.log(linked.toArray());
