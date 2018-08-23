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

    removeDuplicates() {
        var n1 = this.head;
        while (n1 != null) {
//            alert(ll.print());
            var n2 = n1;
            var val = n1.data;
            while (n2.next != null) {
                if (n2.next.data == val) {
                    n2.next = n2.next.next;
//                    alert(val);
                } else {
                    n2 = n2.next;
                }
//                alert(ll.print());
            }
            n1 = n1.next;
        }
        return "duplicates removed"
    }

}

const ll = new LinkedList();

ll.push("a");
ll.push("c");
ll.push("d");
ll.push("d");
ll.push("a");

ll.print();

ll.removeDuplicates();

ll.print();