class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const node = new Node(data);
        if (this.root === null) {
            this.root = node;
        } else {
            let current = this.root;
            let parent;
            while(true) {
                parent = current;
                if (data < current.data) {
                    current = current.left;
                    if (current === null) {
                    parent.left = node;
                    break;
                    }
                } else {
                    current = current.right;
                    if (current === null) {
                    parent.right = node;
                    break;
                    }
                }
            }
        }
    }
    
    find(data) {
        let current = this.root;
        while (current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null) {
                return false;
            }
        }
        return true;
    }
}

const bst = new BST();

bst.insert(8);
bst.insert(3);
bst.insert(1);
bst.insert(6);
bst.insert(4);
bst.insert(5);
bst.insert(7);
bst.insert(10);
bst.insert(14);
bst.insert(13);

bst.find(10);
bst.find(23);