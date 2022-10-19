import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import NumberFild from './component/numberFild/NumberFild';
import NumberPad from './component/numberPad/NumberPad';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState([])
  function passNumber(n) {


    if (typeof (n.id) === 'string') {
    } else {

      setNumber([...number, n.id])

    }

  }
  return (
    <div className="App">
      <Header></Header>
      <NumberFild number={number}></NumberFild>
      <NumberPad passNumber={passNumber}></NumberPad>
    </div>
  );
}

export default App;
