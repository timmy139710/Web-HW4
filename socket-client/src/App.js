import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import SidePane from './sidepane.js';
import Content from './content.js';
class App extends Component {
  constructor() {
    super();
    this.state = {
      user: 'Mike Ross',
      contact: 'Harvey Specter'
    }
  }
  setName = (name) => {
    this.setState({
      contact: name
    })
  }
  render() {
    return (
      <div id="frame">
        <SidePane 
          parentCallback={this.setName}
        />
        <Content />
      </div>
    );
  }
}

export default App;
 
