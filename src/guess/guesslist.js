import React from 'react';
import './guesslist.css';

export default function GuessList(props) {
  ////props.guesses info comes in from parent app.js which passes 
//to statussect.js thru props and then you pass it in the html here by
    //assigning the guesses passed in to a 
    //new array called guesses that maps them out to create html
    //to display the list of guesses
    const guesses = props.guesses.map((guess, index) => (
      <li key={index}>
        {guess}
      </li>
    ));

    //return the above mapped html here
    return (
      <ul id="guessList" className="guessBox clearfix">
        {guesses}
      </ul>
    );
  }

/*export default function GuessList(props) {
 //   const yourGuesses = props.yourGuesses.map((yourGuess, index) => (
 //       <span key={index}> {yourGuess} </span>
 //   ));
    return (
        <yourGuesses /> 
    );
}

//GuessList.defaultProps = {
//    yourGuess: 0
//}
//def

*/