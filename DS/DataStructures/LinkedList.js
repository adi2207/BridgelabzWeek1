

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
        var current = this.head;
        while (current.next.next) {
            if (current.next.element == dataToBeRemoved) {
                current.next = current.next.next;
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
    // pop(){
    //     var curr=this.head;
    //     if(curr==null){
    //         return;
    //     }
    //     if(curr.next==null){
    //         curr=null;
    //         return;
    //     }
    //     if(curr.next.next==null){
    //         curr.next=null;
    //         return;
    //     }
    //     else{
    //         while(curr.next.next.next){
    //             curr=curr.next;
    //         }
    //         curr.next=null;
    //         return;
    //     }
    // }
    search(wordToBeSearched) {
        var curr = this.head;
        while (curr) {
            if (curr.element == wordToBeSearched) {
                return true;
            }
            if (curr.next == null) {
                return false;
            }
            curr = curr.next;
        }
    }
}

module.exports = LinkedList;