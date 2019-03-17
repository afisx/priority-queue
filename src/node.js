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
			if (this.left){
				this.left.parent = this.parent;
			}
			if (this.right){
				this.right.parent = this.parent;
			}
			if (this.parent.left && this.parent.left === this)
			{	
				let left = this.left;
				this.left = this.parent;
				this.parent.left = left;
				if(this.parent.right) {
					this.parent.right.parent = this;
				}
			}
			if (this.parent.right && this.parent.right === this){
				let right = this.right;
				this.right = this.parent;
				this.parent.right = right;
				if(this.parent.left) {
					this.parent.left.parent = this;
				}
			}
			if(this.parent.parent){
				if (this.parent.parent.left === this.parent) {
					this.parent.parent.left = this;
				} else {
					this.parent.parent.right = this;					
				}
				let grandparent = this.parent.parent;
				this.parent.parent = this;
				this.parent = grandparent;
			} else {
				this.parent.parent = this;
				this.parent = null;
			}
			
		} else {
			return;
		}
	}
}

module.exports = Node;
