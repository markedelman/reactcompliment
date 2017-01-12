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
        var plusCompliments = ["good1", "good2", "good3"];
        plusCompliments[Math.floor((Math.random() * 3))]
        return (
            <div>
                    //<Display text="goodCompliment" functionCompliments={this.goodCompliment}/>
            </div>
        );
    }

    badCompliment() {
        console.log('bad compliment');
        var minusCompliments = ["bad1", "bad2", "bad3"];
        minusCompliments[Math.floor((Math.random() * 3))]
        return (
            <div>
                    //<Display text="badCompliment" functionCompliments={this.badCompliment}/>
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