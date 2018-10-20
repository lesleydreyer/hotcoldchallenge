import React from 'react';
import GuessList from '../guess/guesslist';
import GuessCount from '../guess/guesscount';
import AuralStatus from '../status/auralstatus';

export default function StatusSect(props) {
    //destructuring the guesses and auralstatus passed thru props i think
    const { guesses, auralStatus } = props;
    const guessCount = guesses.length;

//combine all the status info into one section and pass the props from app.js 
//down to the html written in guesscount guesslist and auralstatus components
    return (
      <section aria-labelledby="guessCount" aria-describedby="guessList">
        <GuessCount guessCount={guessCount} />
        <GuessList guesses={guesses} />
        <AuralStatus auralStatus={auralStatus} />
      </section>
    );
}