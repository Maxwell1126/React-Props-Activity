import React, { Component } from 'react';
import Header from './Components/Header.js';
import EnterNumber from './Components/EnterNumber.js';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      total:0,
    }
  }


  increaseNumber = (inputNumber) => {
    
    this.setState({  
      total: parseInt(this.state.total) + parseInt(inputNumber),
    });
  }

  decreaseNumber = (inputNumber) => {
    this.setState({
      total: parseInt(this.state.total) - 1,
    });
  }

  // decreaseNumber = (event) => {
  //   this.setState({
  //     number: (this.state.number) - 1,
  //   })
  //   // this.props.decreaseNumber(number);
  // (event.target.value)}

  render() {
    return (
      <div className="App">
        <Header />
        <div className="EnterNumber">
          <EnterNumber currentNumber={this.state.total}
            changeNumber={this.changeNumber}
            increaseNumber={this.increaseNumber}
            decreaseNumber={this.decreaseNumber} />
        </div>
      </div>
      
    );
  }
}

export default App;
