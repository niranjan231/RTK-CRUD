import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Post from './Post';
import {Routes , Route} from "react-router-dom"
import Card from './Card';

function App() {

  const data = useSelector((state)=>state.counter)
  return (
    <div className="App">
<Routes>
  <Route path='/post' element={<Post/>}/>
  <Route path='/card' element={<Card/>}/>
</Routes>
    </div>
  );
}

export default App;
