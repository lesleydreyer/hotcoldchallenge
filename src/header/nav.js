import React from 'react';
import './nav.css';

//gets props (onrestart and ongene.. functions) from header.js which gets from app.js
export default function Nav(props) {
  return (
    <nav>
      <ul className="clearfix">
        <li>
          <a 
            href="#what" 
            className="what"
            aria-label="How to play"
          >
            What?
          </a>
        </li>
        <li>
          <a
            href="#feedback"
            className="new"
            aria-label="Start a new game"
            onClick={() => props.onRestart()}
          >
            + New Game
          </a>
        </li>
        <li>
          <a
            href="#get-status"
            /* the `visuallyhidden` class hides an element 
            while leaving it available to screen reader users  */
            className="visuallyhidden focusable status-link"
            onClick={() => props.onGenerateAuralUpdate()}
          >
            Hear state of game
          </a>
        </li>
      </ul>
    </nav>
  );
}












/*
export default function Nav() {
    return ( 
        <nav>
            <ul>
                <li id="what">What?</li>
                <li id="newgame">+NewGame</li>
            </ul>
        </nav>
    );
}
*/

////////////////////

/*
const links = [{
    text: 'WHAT?',
    href: ''
}, {
    text: '+NEWGAME',
    href: ''
}];


ReactDOM.render(
    <NavigationBar title="HOT or COLD" links={links} />,
    document.getElementById('root')
  );*/