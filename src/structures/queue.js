class Queue {
  constructor(...items) {
    this.queue = [...items];
  }

  add(...items) {
    return this.queue.unshift(...items)
  }

  remove() {
    return this.queue.pop();
  }
}

export default Queue;
