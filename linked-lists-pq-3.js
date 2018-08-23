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

    reverse() {
        var current = this.head;
        var next = null;
        var prev = null;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;

        return "linked list reversed"
    }
}

const ll = new LinkedList();

ll.push("a");
ll.push("b");
ll.push("c");
ll.push("d");

ll.print();

ll.reverse();

ll.print();