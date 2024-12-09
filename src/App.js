import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function App() {

  const data = useSelector((state)=>state.counter)
console.log(data)
  return (
    <div className="App">
yuiop
    </div>
  );
}

export default App;
