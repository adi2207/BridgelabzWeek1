
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
};

class StackLL{
    constructor(){
        this.front = null;
        this.back=null;
        this.size = 0;
    }

    push(data){
        let node=new Node(data);
        if(this.front==null){
            this.front=node;
            this.back=node;
            
        }
        else{
            
            node.next=this.front;   //check this
            this.front=this.node;
        }

    }

    pop(){
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

    printStackLL(){
        var current=this.front;
        let slist="";
        while(current)
        {
            slist=slist + " " + current.data;
            current=current.next;
        }
        return slist;
    }
}
module.exports=StackLL;


