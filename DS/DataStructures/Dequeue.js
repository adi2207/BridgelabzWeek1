
class Dequeue {

    constructor() {
        this.items = [];
    }

    addRear(element) {
        this.items.push(element);
    }

    addFront(element) {
        this.items.unshift(element);
    }

    RemoveFront() {
        if (this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }
    RemoveBack() {
        if (this.isEmpty())
            return "Underflow";
        return this.items.pop();
    }

    front() {
        if (this.isEmpty())
            return "No elements in Queue";
        return this.items[0];
    }
    rear() {
        if (this.isEmpty())
            return "No elements in Queue";
        var length=this.items.length;
        return this.items[length-1];
    }
    isEmpty() {
        return this.items.length == 0;

    }
    printQueue() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}

module.exports=Dequeue;