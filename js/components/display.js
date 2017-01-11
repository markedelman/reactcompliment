// Child, stateless

import React from 'react';

export default function Display(props){
  
    
    return(
        <div className="display">
            <button type="button" onClick={props.onClick}>Compliment</button>
        </div>
    );
};