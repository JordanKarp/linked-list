import Node from "./node.js"

export default class LinkedList {
    constructor () {
        this.headNode =  null
    }

    append(value) {
        if (this.headNode == null) {
            this.prepend(value)
        }
        let currentNode = this.headNode;
        while (currentNode.nextNode != null){
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = new Node(value);
    }
    prepend(value) {
        let tempNode = null;
        if (this.headNode != null) {
            tempNode = this.headNode
        }
        this.headNode = new Node(value)
        this.headNode.nextNode = tempNode
    }
    size() {
        let counter = 0;
        let temp = this.headNode;
        while (temp != null) {
            counter++;
            temp = temp.nextNode
        }
        return counter;
    }
    head() {
        return this.headNode
    }
    tail() {
        let temp = this.headNode;
        while (temp.nextNode != null) {
            temp = temp.nextNode
        }
        return temp
    }
    at(index) {
        let tempNode = this.headNode
        for (let i=0; i<index; i++){
            if (tempNode == null) {
                return "No item at this index"
            }
            tempNode = tempNode.nextNode

        }
        return tempNode
    }
    pop() {
        let current = this.headNode;
        let prev = null;
        while (current.nextNode != null) {
            prev = current;
            current = current.nextNode;
        }
        prev.nextNode = null;
  }
    contains(value) {
        let tempNode = this.headNode
        while (tempNode != null) {
            if (tempNode.value === value){
                return true
            }
            tempNode = tempNode.nextNode
        }
        return false

    }
    find(value) {
        let tempNode = this.headNode;
        let idx = 0;
        while (tempNode != null) {
            if (tempNode.value === value){
                return idx
            }
            idx++
            tempNode = tempNode.nextNode
        }
        return null
    }
    toString() {
        let string = ""
        let tempNode = this.headNode;
        while (tempNode != null) {
            string += `( ${tempNode.value} ) -> `
            tempNode = tempNode.nextNode
        }
        string += 'null'
        return string
    }
}
