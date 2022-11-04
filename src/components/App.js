import React,{useState} from 'react'
import '../styles/App.css';
const App = () => {

 const [set, setState]= useState(new Date().toLocaleString())
 
  setInterval(()=>{
    setState (new Date().toLocaleString());
  },1000);

  return (
    <div id="main">
      <div className="date-time">{set}</div>
    </div>
  )
}


export default App;
