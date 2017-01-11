//Parent, Stateful

import React from 'react';
import ReactDOM from 'react-dom';
import Display from './display';

export default class Submit extends React.Component {
constructor(props){
    super(props);
    this.state = {clicked: false}; 
    this.onButtonClick =this.onButtonClick.bind(this);
};
onButtonClick(){
    console.log("On button click");
    this.setState({clicked: true});
};

//["","",""]
render(){

 var showCompliment=[];
     if(this.state.clicked){
       showCompliment =['hi','hello'];
     }
return(
  
   <div>
    <Display onClick={this.onButtonClick} text="showCompliment"/>
    {showCompliment}
    </div>
 );
}
};

// class Surprise extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {clicked: false};
//     }
//     // The callback.  Called when the button is clicked so the
//     // parent knows that something has happened
//     onButtonClick() {
//         this.setState({clicked: true});
//     }
//     render() {
//         var message;
//         if (this.state.clicked) {
//             message = "Hello world";
//         }

//         // Passes the onButtonClick callback to the child 
//         return (
//             <div>
//                 <Button onClick={this.onButtonClick} text="Show message" />
//                 {message}
//             </div>
//         );
//     }
// }