import React from 'react';

import './form.css';


//props.enterGuess info comes in from parent app.js which passes 
//to guesssect.js thru props and then you pass it in the html here
export default class Form extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    //if a guess has been made (func from app.js)
    if (this.props.enterGuess) {
        //set the value equal to input and pass to function
      const value = this.input.value;
      this.props.enterGuess(value);
    }
    //clear the input after guess has been submitted
    this.input.value = '';
    this.input.focus();
  }
//use uncrontrolled input ref below to get text user entered then when onSubmit form 
//(above) you pass to the guess function that comes down as props from parent app.js
  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          type="number"
          name="userGuess"
          id="userGuess"
          className="text"
          min="1"
          max="100"
          autoComplete="off"
          aria-labelledby="feedback"
          ref={input => (this.input = input)}
          required
        />
        <button 
          type="submit"
          name="submit"
          id="guessButton" 
          className="button"
        >
          Guess
        </button>
      </form>
    );
  }
}