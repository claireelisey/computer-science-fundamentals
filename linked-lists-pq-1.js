class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    push(value) {
        const node = new Node(value, null);
        if (!this.head) {
            this.head = node;
        }
        else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        return "node added";
    }
    
    print() {
        let s = "";
        let current = this.head;
            while (current != null) {
                s = s + current.data + " ";
                current = current.next;
            }
            return s;
    }
}

const ll = new LinkedList();

ll.push(8);

ll.print();