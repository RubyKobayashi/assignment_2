import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {

  state = {
    input: ''
  };

  changeListenerHandler = (event) => {
    this.setState({input: event.target.value})
  };

  deleteCharHandler = (index) => {
    const text = this.state.input.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({input: updatedText});
  }


  render() {
    const charList = this.state.input.split('').map((char, index) => {
      return <Char character={char}
        key={index}
        clicked={() => this.deleteCharHandler(index)} />;
    });


    return (
      <div className="App">
        <input type='text'
          onChange={(event) => this.changeListenerHandler(event)}
          value={this.state.input}/>
        <p>{this.state.input}</p>
        <Validation length={this.state.input.length}/>
        {charList}
      </div>
    );
  };
};

export default App;
