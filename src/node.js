class Node {
	constructor(data, priority) {
		this.left = null;
		this.right = null;
		this.parent = null;
		this.data = data;
		this.priority = priority;
	}

	appendChild(node) {
		if (this.left){
			this.right = node;
			node.parent = this;
		}else{
			this.left = node;
			node.parent = this;
		}
	}

	removeChild(node) {
		if (this.left === node){
			delete this.left;
		}else{
			delete this.right;
		}
	}

	remove() {
		delete this;
	}

	swapWithParent() {
		
	}
}

module.exports = Node;
