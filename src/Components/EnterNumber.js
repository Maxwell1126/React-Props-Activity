import React, { Component } from 'react';

class EnterNumber extends Component {
    constructor(props){
        super(props);
        this.state={
            number:'',
        }

    }

    onNumberChange = (event) => {
        this.setState({
            number: event.target.value,
        });
    }

    increaseNumber = (event) =>{

        this.props.increaseNumber(this.state.number);
    }

    decreaseNumber = (event) => {

        this.props.decreaseNumber(this.state.number);
    }

    render() {
        return (
            <div>
                <button onClick={this.increaseNumber}>UP</button>
                <input onChange={this.onNumberChange}placeholder="Enter a number" type="int" />
                <button onClick={this.decreaseNumber}>DOWN</button>
                <p>Number: {JSON.stringify(this.props.currentNumber)}</p>
            </div>
        )
    }
}

export default EnterNumber;