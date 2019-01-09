import React, { Component } from 'react';
import '../App.css';
import Chart from './Chart';
import StructureQueue from '../structures/queue';

class Queue extends Component {
  constructor(props) {
    super(props);

    this.state = {
      queue: null,
      data: [12, 5, 6, 6, 9, 10],
      width: 700,
      height: 100,
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

    let data = this.state.data;
    data.push(25);
    this.setState({
      queue,
      data
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
    console.log('queue this.state: ', this.state)
    return (
      <div className="structure-wrapper">
        <div
          className='button'
          onClick={() => this.addToQueue(1)}>
          {'Add to queue'}
        </div>
        <div
          className='button'
          onClick={this.removeFromQueue}>
          {'Remove from queue'}
        </div>
        <Chart
          data={this.state.data}
          size={[500,500]}
          id='chart-queue'/>
      </div>
    );
  }
}

export default Queue;
