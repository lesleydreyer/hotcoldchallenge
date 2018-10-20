import React from 'react';

//props.auralstatus info comes in from parent app.js which passes 
//to statussect.js thru props and then you pass it in the html here
export default function AuralStatus(props) {
  return (
    <p
      id="status-readout"
      className="visuallyhidden"
      aria-live="assertive"
      aria-atomic="true"
    >
      {props.auralStatus}
    </p>
  );
}