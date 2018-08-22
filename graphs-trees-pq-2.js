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

    findDistanceBetweenTwoNodes(root, n1, n2) {
		var lowestCommonAncestor = this.findCommonAncestor(root, n1, n2);
		var distanceNode1ToRoot = this.countAncestors(lowestCommonAncestor, n1);
		var distanceNode2ToRoot = this.countAncestors(lowestCommonAncestor, n2);
		var distanceRootToAncestor = this.countAncestors(root, lowestCommonAncestor);
		var totalDistance = (distanceNode1ToRoot + distanceNode2ToRoot) - (2 * distanceRootToAncestor);
		return ('The distance between node ' + n1 + ' and node ' + n2 + ' is ' + totalDistance);
	}

	findCommonAncestor(root, n1, n2) {
		if (!root) return;
		var lowestCommonAncestor = root.data;
		if (n1 === lowestCommonAncestor || n2 === lowestCommonAncestor) {
			return lowestCommonAncestor;
		}
		if (n1 < lowestCommonAncestor && n2 < lowestCommonAncestor) {
			return this.findCommonAncestor(root.left, n1, n2);
		}
		if (n1 > lowestCommonAncestor && n2 > lowestCommonAncestor) {
			return this.findCommonAncestor(root.right, n1, n2);
		}
		return lowestCommonAncestor;
	}

	countAncestors(root, data) {
		let thisNode = this.root;
		let nodeCount = 0;
		while (thisNode) {
			if (data === thisNode.data) {
				return nodeCount;
			}
			thisNode = data < thisNode.data ? thisNode.left : thisNode.right;
			nodeCount++;
		}
	}

	getRootNode() {
		return this.root;
	}

	insert(data) {
		var newNode = new Node(data);
		if (this.root === null) {
			this.root = newNode;
			this.length++;
		} else {
			this.insertNode(this.root, newNode);
		}
	}

	insertNode(node, newNode) {
		if (newNode.data < node.data) {
			if (node.left === null) {
				node.left = newNode;
				this.length++;
			} else {
				this.insertNode(node.left, newNode);
			}
		} else {
			if (node.right === null) {
				node.right = newNode;
				this.length++;
			} else {
				this.insertNode(node.right, newNode);
			}
		}
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

var root = bst.getRootNode();

bst.findDistanceBetweenTwoNodes(root, 4, 10);
bst.findDistanceBetweenTwoNodes(root, 8, 10);
bst.findDistanceBetweenTwoNodes(root, 1, 14);