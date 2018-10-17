import React from 'react';
import './form.css';

export default function Form() {
    return ( 
        <form>
            <legend class="header">Make your Guess!</legend>
            <fieldset>
                <label for="enterGuess" />
                <input type="text" id="enterGuess" placeholder="Enter your guess" />
                <br />
                <label for="submitGuess" />
                <input type="submit" id="submitGuess" value="Guess" />
            </fieldset>
        </form>
    );
}