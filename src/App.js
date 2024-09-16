import './App.css';
import Box from './component/Box';
import { useState } from 'react';

// 1.박스 2개 (타이틀, 사진, 결과)
// 2.가위 바위 보 버튼이 있다.
// 3.버튼을 클릭하면 클릭한 값이 박스에 보임.
// 4.컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5.3 4 의 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6.승패결과에 따라 테두리 색이 바뀐다. (이기면-초록, 지면-빨강, 비기면-검정)

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

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState('');
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement = (user, computer) => {
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

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  return (
    <div>
      <div className="main">
        <Box title="you" item={userSelect} result={result} />
        <Box title="computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play('scissors')}>가위</button>
        <button onClick={() => play('rock')}>바위</button>
        <button onClick={() => play('paper')}>보</button>
      </div>
    </div>
  );
}

export default App;
