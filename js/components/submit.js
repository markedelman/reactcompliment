//Parent, Stateful

import React from 'react';
import ReactDOM from 'react-dom';
import Display from './display';

export default class Submit extends React.Component {
    constructor(props) {
        super(props);
    }

    goodCompliment() {
        console.log('good compliment');
        var plusCompliments = ["You out-program Ryan Dahl", "You will be a great success ", "You're  better looking than Derek Zoolander"];
        plusCompliments[Math.floor((Math.random() * 3))]
        return (
            <div>
                'I am Good'
            </div>
        );
    }

    badCompliment() {
        console.log('bad compliment');
        var minusCompliments = ["1", "2", "3"];
        minusCompliments[Math.floor((Math.random() * 3))]
        return (
            <div>
                {'I am Bad'}
            </div>
        );
    }

    startApp() {
        return (
            <div>
                <Display text="goodCompliment" functionCompliments={this.goodCompliment}/>
                <Display text="badCompliment" functionCompliments={this.badCompliment}/>
            </div>
        )
    }

    render() {

        return this.startApp();

    }

}

// class Surprise extends React.Component {     constructor(props) {
// super(props);         this.state = {clicked: false};     }     // The
// callback.  Called when the button is clicked so the     // parent knows that
// something has happened     onButtonClick() {         this.setState({clicked:
// true});     }     render() {         var message;         if
// (this.state.clicked) {             message = "Hello world";         }
// // Passes the onButtonClick callback to the child         return (
//  <div>                 <Button onClick={this.onButtonClick} text="Show
// message" />                 {message}             </div>         );     } }