import React, { Component } from 'react';
import './App.css';
//import Nav from '../header/nav';
//import Form from '../form/form';
//import '../guess/numberguesses';
//import '../guess/guesslist';
//import GuessList from '../guess/guesslist';
//import NumberOfGuesses from '../guess/numberguesses';
import Header from '../header/header';
import GuessSect from '../guess/guesssect';
import StatusSect from '../status/statussect';
import InfoSect from '../info/infosect';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //currentGuess: 0,
      guesses: [],
      answer: Math.floor(Math.random()*100),
      auralStatus: '',
      feedback: 'Make your guess!'
    }
  }

restart() {
  this.setState({
    //currentGuess: 0,
    guesses: [],
    answer: Math.floor(Math.random()*100),
    auralStatus: '',
    feedback: 'Make your guess!'
  });
}

enterGuess(guess){
  //parse the guess into an integer and if not a number ask to reenter
  guess = parseInt(guess);//let theGuess = parseInt(guess);
  if (isNaN(guess)) {  //auralStatus = "Please enter a number"
    this.setState({feedback: 'Unable to prcess. Please enter a number'});
    return; //theGuess;
  }

  //determine how close guess is to answer and provide feedback
  let difference = Math.abs(guess - this.state.answer);
  let feedback = 'You got it!';
  if (difference >= 50) {  feedback = 'You\'re ice cold';}
  else if (difference >= 30) { feedback = 'You\'re cold';}
  else if (difference >= 10) { feedback = 'You\'re warm';}
  else if (difference >= 1) { feedback = 'You\'re hot';}
  else { feedback = 'You\'ve got it!';}

  //set the state with the correct feedback and the guess
  this.setState({feedback, guesses: [...this.state.guesses, guess]});
}

generateAuralUpdate(){
  const { guesses, feedback } = this.state;
 /* let guessString = 'guesses';
  if (guesses.length <= 1) {
    guessString = `guess`;
  }
  let auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guessString} guesses`;
  this.setState({auralStatus});*/
  
  const pluralize = guesses.length !== 1;
  let  auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

  if (guesses.length > 0) {
    auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
  }
  this.setState({ auralStatus });
}

  render() {
    const { feedback, guesses, auralStatus } = this.state;
    //const guessCount = guesses.length();  gives typeerror not a function error
    let guessCount = 0;
    for (guessCount=0; guessCount<= guesses.length; guessCount++){
      guessCount = guessCount+1;
    }


//passes props to header, guesssect, and statussect, infosect is just html
    return (
      <div>
        <Header>
          onRestart={()=>this.restart()}
          onGenerateAuralUpdate={()=>this.generateAuralUpdate()}
        </Header>
        <main role="main">
          <GuessSect feedback={feedback} count={guessCount} enterGuess={guess=>this.enterGuess(guess)} />
          <StatusSect guesses={guesses} auralStatus={auralStatus} />
          <InfoSect />
        </main>
      </div>
    );
  }
}


export default App;

/*
   <div className="App">
        <Nav />
        <h1>HOT or COLD</h1>
        <Form />
        <NumberOfGuesses />
        <GuessList />
      </div>
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