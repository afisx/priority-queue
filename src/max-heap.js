const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		this.insertNode(new Node(data, priority));
	}

	pop() {
		if (this.isEmpty()){
			return;
		} else if (this.size == 1){
			return this.detachRoot();
		} else {
			return this.parentNodes.pop();
		}
	}

	detachRoot() {
		let root = this.root;
		this.root = null;		
		return root;
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.parentNodes.length ;
	}

	isEmpty() {
		if (!this.root && this.parentNodes.length == 0){
			return true;
		} else {
			return false;
		}
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {
		if (!this.root){
			this.root = node;
			this.parentNodes.push(node);
		} else {
			this.parentNodes[this.parentNodes.length - 1].appendChild(node);
			this.parentNodes.push(node);
		}
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
