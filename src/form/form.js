import React from 'react';
import './form.css';

export default class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            guess: 0
        }
    }
    setGuess(guess) {
        this.setState({guess});
    }

    onSubmit(event){
        event.preventDefault();
        console.log(this);
        this.setGuess(this.input);
        
    }
    render(){  //form onSubmit={event => event.preventDefault()}>
    //                <input type="text" id="enterGuess" 
   //                 placeholder="Enter your guess" 
     //               onChange={event => props.onChange(event.target.value)}/>
    return ( 
        <form onSubmit={event => this.onSubmit(event)}> 
            <legend className="header">Make your Guess!</legend>
            <fieldset>
                <label for="enterGuess" />
                <input type="text" id="enterGuess" 
                    placeholder="Enter your guess" value={this.state.guess} onChange={value=>(this.setGuess(value))} ref={input=>this.input=input} />
                <br />
                <label for="submitGuess" />
                <input type="submit" id="submitGuess" value="Guess" />
            </fieldset>
        </form>
    );
}}