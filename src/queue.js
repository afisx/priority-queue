const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize = 30) {
		this.heap = new MaxHeap();
		this.maxSize = maxSize;
	}

	push(data, priority) {
		if (this.heap.size() >= this.maxSize){
			throw new Error('This heap is max');
		} else {
			this.heap.push(data, priority);
		}
	}

	shift() {
		if (this.size() == 0) {
			throw new Error('This Queue is empty');
		} else {
			this.heap.pop();
		}
	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		if (this.heap.size() > 0){
			return false;
		} else {
			return true;
		}
	}
}

module.exports = PriorityQueue;
