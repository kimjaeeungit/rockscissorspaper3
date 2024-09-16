import React, { Component } from 'react';
import BoxClass from './component/BoxClass';

const choice = {
  rock: {
    name: 'Rock',
    img: 'https://t3.ftcdn.net/jpg/02/93/71/22/360_F_293712283_EGPqlm1bxpH0ZnrngyjRBol9GnJm2ST7.jpg',
  },
  scissors: {
    name: 'Scissors',
    img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRyW_8vEhjuGXzpaK1IDB2krF6P-Zhjt1Rgk2wLvEQKTuOt1YVUSWt8OWy4SEhfS-kEakb8Oble7rQm9lub-Qcru3Z7o38QmMClj2Jwc3xtych5y92oxCq_AA',
  },
  paper: {
    name: 'Paper',
    img: 'https://i.ebayimg.com/images/g/G5kAAOSwmoRexd9C/s-l400.jpg',
  },
};
export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: '',
    };
  }
  play = (userChoice) => {
    this.setState({ userSelect: choice[userChoice] });
    let computerChoice = this.randomChoice();
    this.setState({ computerSelect: computerChoice });
    this.setState({
      result: this.judgement(choice[userChoice], computerChoice),
    });
  };

  judgement = (user, computer) => {
    console.log('user', user, computer);
    if (user.name == computer.name) {
      return 'tie';
    } else if (user.name == 'Rock')
      return computer.name == 'Scissors' ? 'win' : 'lose';
    else if (user.name == 'Scissors')
      return computer.name == 'Paper' ? 'win' : 'lose';
    else if (user.name == 'Paper')
      return computer.name == 'Rock' ? 'win' : 'lose';
  };

  randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  render() {
    return (
      <div>
        <div className="main">
          <BoxClass
            title="you"
            item={this.state.userSelect}
            result={this.state.result}
          />
          <BoxClass
            title="computer"
            item={this.state.computerSelect}
            result={this.state.result}
          />
        </div>
        <div className="main">
          <button onClick={() => this.play('scissors')}>가위</button>
          <button onClick={() => this.play('rock')}>바위</button>
          <button onClick={() => this.play('paper')}>보</button>
        </div>
      </div>
    );
  }
}
