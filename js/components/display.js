// Child, stateless

import React from 'react';

export default function Display(props){
  console.log(props);
    
    return(
        <div className="display">
            <button type="button" onClick={()=>props.functionCompliments()}>{props.text}</button>
        </div>
    );
};