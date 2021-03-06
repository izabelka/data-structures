import React, { Component } from 'react';
import '../App.css';
import Queue from './Queue';

const STRUCTURES = [
  {
    id: 1,
    name: 'queue',
  },
  {
    id: 2,
    name: 'stack',
  }
]
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      structureSelected: '',
    };
  }

  selectStructure = (structure) => {
    this.setState({
      structureSelected: structure
    })
  }

  renderMenu = () => {
    return (
      <div id="menu">
        {
          STRUCTURES.map(structure => {
            return (
              <div
                className={`menu-structure${
                  structure.name === this.state.structureSelected ? ' selected' : ''}`}
                key={structure.id}
                onClick={() => this.selectStructure(structure.name)}>
                <span>
                  {structure.name}
                </span>
              </div>
            )
          })
        }
      </div>
    )
  }

  renderContent = () => {
    let component;
    switch (this.state.structureSelected) {
      case 'queue':
        component = <Queue />
        break;
      default:
        component = null;
    }
    return (
      <div id='content'>
        {component}
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <h1 id="title">
          {'Data Structures'}
        </h1>
        {this.renderMenu()}
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
