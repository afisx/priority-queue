class Node {
	constructor(data, priority) {
		this.left = null;
		this.right = null;
		this.parent = null;
		this.data = data;
		this.priority = priority;
	}

	appendChild(node) {
		if (this.left && this.right){
			return;
		}else if(this.left){
			this.right = node;
			node.parent = this;
		}else{
			this.left = node;
			node.parent = this;
		}
	}

	removeChild(node) {
		if (this.left !== node && this.right !== node){
			throw new Error('This node not a child');
		}else if (this.left == node){
			this.left = null;
			node.parent = null;
		}else{
			this.right = null;
			node.parent = null;
		}
	}

	remove() {
		if (this.parent){
			if (this.parent.left){
				this.parent.removeChild(this.parent.left)
			} else {
				this.parent.removeChild(this.parent.right)
			}
		}
		delete this;
	}

	swapWithParent() {
		if (this.parent){
			let node = this;
			let parent = this.parent;
			let grandParent = this.parent.parent;
			if(this.parent.parent.left === parent) {
				this.parent.parent.left = node;
			} else {
				this.parent.parent.right = node;
			}
			//this.parent.parent = this;
			this.parent = this.parent.parent;
		} else {
			return;
		}
	}
}

module.exports = Node;
