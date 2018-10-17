import React from 'react';
import './nav.css';


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