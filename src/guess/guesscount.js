import React from 'react';
import './guesscount.css';

export default function GuessCount(props) {
    const isPlural = props.count !== 1;
    const guessNoun = isPlural ? 'guesses' : 'guess';

//guessNoun comes from function above which gets info from props passed down from app to statussect
//props.guesscount info comes in from parent app.js which passes 
//to statussect.js thru props and then you pass it in the html here
    return (
        <h2 id="guessCount">
            You've made <span id="count">{props.guessCount}</span> {guessNoun}!
        </h2>
    );
}