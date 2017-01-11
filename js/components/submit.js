//Parent, Stateful

import React from 'react';
import ReactDOM from 'react-dom';
import Display from './display';

export default class Submit extends React.Component {
constructor(props){
    super(props);
    this.state = {
        clicked: false,
        compliments: ["You are a better programmer than Ryan Dahl", "You have better ", "You are MORE really really really ridiculously good looking than Derek Zoolander"]
    }; 
    this.onButtonClick =this.onButtonClick.bind(this);
}

onButtonClick(){
    console.log("On button click");
    this.setState({clicked: true});
}

// 




// const showCompliment = () => {
// return compliments[Math.floor((Math.random() * 3))];
// };

showCompliment(){
    return this.state.compliments[Math.floor((Math.random() * 3))]
}

startApp() {
        return (
            <div>
                <Display onClick={this.onButtonClick} text="showCompliment"/>
            </div>
        )
}


appClicked(){
    return (
        <div>
            <Display onClick={this.onButtonClick} text="showCompliment"/>
            {this.showCompliment()}
        </div>
    )
}

render(){
// const compliments = ["You are a better programmer than Ryan Dahl", "You have better ", "You are MORE really really really ridiculously good looking than Derek Zoolander"];
// const showCompliment = () => {
// return compliments[Math.floor((Math.random() * 3))];
//  var showCompliment;
     if(!this.state.clicked){
         return this.startApp();
     } else {
         return this.appClicked();
     }
    }

}


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