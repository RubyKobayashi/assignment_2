import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    input: ''
  };

  changeListenerHandler = (event) => {
    this.setState({input: event.target.value})
  };


  render() {
    return (
      <div className="App">
      <input type='text'
      onChange={(event) => this.changeListenerHandler(event)}
      value={this.state.input}/>
      <p>{this.state.input}</p>
      </div>
    );
  };
};

export default App;
