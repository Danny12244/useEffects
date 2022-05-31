import "./App.css";
import React from 'react'
import Todos from "./components/Todos";
import Stop from './components/Stopwatch';



export const App=()=>{
  
  return <div className="App">
   <Todos/>

  <Stop start={10} end={20} />
  </div>
};
