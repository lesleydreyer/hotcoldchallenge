
import React from 'react';
import './header.css';
import Nav from './nav';


//this goes up to display in app.js
//the props come in from app.js and are also passed down to nav.js
//nav comes in from nav.js and adds in html here
export default function Header(props) {
  return (
    <header>
      <Nav
        onGenerateAuralUpdate={() => props.onGenerateAuralUpdate()}
        onRestart={() => props.onRestart()}
      />
      <h1>HOT or COLD</h1>
    </header>
  );
}