import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'

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
        <Validation length={this.state.input.length}/>
      </div>
    );
  };
};

export default App;
