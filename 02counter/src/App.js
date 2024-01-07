import {useState} from 'react'

import logo from './logo.svg';

import './App.css';

function App() {

let [counter,gautamCounter]=useState(5)



  // let counter =5
  const addValue=()=>{
    // counter = counter + 1
    
    if(counter !== 20){
      gautamCounter(counter +1)
    console.log("clicked ",counter)
    }
  }


  const removeValue=()=>{
    
    if(counter!==0){
      gautamCounter(counter-1)
    console.log("removed ",counter)
    }
  }
  return (
    <>
    <h1>chai aur react</h1>
    <h2>counter value: {counter}</h2>

    <button
    onClick={addValue}>Add Value</button>
    <br />
    <button 
    onClick={removeValue}>Remove Value</button>


    </>
  );
}

export default App;
