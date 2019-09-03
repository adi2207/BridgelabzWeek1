

class Node {

    constructor(element) {
        this.element = element;
        this.next = null
    }
}

class LinkedList {

    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        var node = new Node(element);
        var current;
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    remove(dataToBeRemoved) {
        var current=this.head;
        while(current.next.next){
            if (current.next.element==dataToBeRemoved){
                current.next=current.next.next;
                this.size--;
            }
            else {
                current = current.next;    
            }
        }  
    }

    isEmpty() {
        return this.size == 0;
    }
    
    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + "-->";
            curr = curr.next;
        }
        console.log(str);
    }
}

module.exports=LinkedList;