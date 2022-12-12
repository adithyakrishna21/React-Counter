import { useState } from 'react';
import './App.css';

function App() {
  const[counter,setCounter]=useState(0);
  function incrementCounter(){
    setCounter(counter+1);
  }
  function decrementCounter(){
    if(counter!==0)
    setCounter(counter-1);
  }

  function reset(){
    setCounter(0);
  }
  return (
    <div 
    style={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
    }}
    className="App">
      <header className="App-header">
        <h2 style={{
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          justifyContent:'center',
          fontStyle:'italic',
          textShadow:'3px 4px 5px',
          textDecoration:'underline'}}>Counter Application</h2>
        <h4 style={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'center',
                textShadow:'1px 2px 3px',
                fontSize:'20px'
        }}>{counter}</h4>
        <button 
        style={{
          backgroundColor:'Green',
          padding:'10px',
          borderRadius:'50px',
          border:'1px',
          margin:'1px',
          width:'100px'
        }}
        onClick={incrementCounter}>Click Me :)</button>
        
        <button 
                style={{
                  backgroundColor:'red',
                  padding:'10px',
                  borderRadius:'50px',
                  border:'1px',
                  margin:'1px',
                  width:'100px'
                }}
        onClick={decrementCounter}>Click Me ;(</button>

        <button 
                style={{
                  backgroundColor:'skyblue',
                  padding:'10px',
                  borderRadius:'50px',
                  border:'1px',
                  margin:'1px',
                  width:'100px'
                }}
        onClick={reset}>Reset :|</button>
      </header>
    </div>
  );
}

export default App;
