
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
};

class QueueLL{
    constructor(){
        this.front = null;
        this.back=null;
        this.size = 0;
    }

    enqueue(data){
        let node=new Node(data);
        if(this.back==null){
            this.front=node;
            this.back=node;
            
        }
        else{
            this.back.next=node;
            this.back=this.back.next;
        }

    }

    dequeue(){
        if(this.front!=null){
            var frontElement=this.front;
            this.front=this.front.next;
            return frontElement.data;
        }
        else{
            if(this.back!=null){
                this.back=null;
            }
            else
            return false;
        }
    }

    printQueueLL(){
        var current=this.front;
        let qlist="";
        while(current)
        {
            qlist=qlist + " " + current.data;
            current=current.next;
        }
        return qlist;
    }
}
module.exports=QueueLL;


