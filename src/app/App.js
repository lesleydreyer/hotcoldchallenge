import React, { Component } from 'react';
import './App.css';
import Nav from '../nav/nav';
import Form from '../form/form';
import '../guess/numberguesses';
import '../guess/guesslist';
import GuessList from '../guess/guesslist';
import NumberOfGuesses from '../guess/numberguesses';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGuess: 0,
      answer: Math.floor(Math.random()*100)
    }
  }


  render() {
    return (
      <div className="App">
        <Nav />
        <h1>HOT or COLD</h1>
        <Form />
        <NumberOfGuesses />
        <GuessList />
      </div>
    );
  }
}

export default App;


/*

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );

*/