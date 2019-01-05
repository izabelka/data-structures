import React, { Component } from 'react';
import '../App.css';
import StructureQueue from '../structures/queue';

class Queue extends Component {
  constructor(props) {
    super(props);

    this.state = {
      queue: null,
    };
  }

  addToQueue = (...items) => {
    let queue;
    if (this.state.queue) {
      queue = this.state.queue;
      queue.add(...items);
    } else {
      queue = new StructureQueue(...items);
    }

    this.setState({
      queue
    });
  }

  removeFromQueue = () => {
    let queue = this.state.queue;
    queue.remove();
    this.setState({
      queue
    });
  }

  render() {
    return (
      <div className="structure-wrapper">
        <div
          className='button'
          onClick={() => this.addToQueue(1)}>
          Add to queue
        </div>
        <div
          className='button'
          onClick={this.removeFromQueue}>
          Remove from queue
        </div>
      </div>
    );
  }
}

export default Queue;
