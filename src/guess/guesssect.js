
import React from 'react';

import Feedback from './feedback';
import Form from '../guess/form';

//combine all the feedback and actual guess info into one section and pass the props from app.js 
//down to the html written in feedback and form components
export default function GuessSection(props) {
  const { feedback, guessCount } = props;
  return (
    <section aria-label="Guess section" aria-describedby="feedback">
      <Feedback feedback={feedback} guessCount={guessCount} />
      <Form enterGuess={guess => props.enterGuess(guess)} />
    </section>
  );
}