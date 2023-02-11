import React, { useState } from 'react'
import AddTask from '../AddTask';
import Task from '../Task/Task';


const Button = () => {
    const [clickBtn, setClickBtn] = useState(true);
    const [show, setShow] = useState(true)
    const [sendTask, setSendTask] = useState([])
    
 console.log(clickBtn)
 
 const clicked = (e) => {
    setClickBtn(!clickBtn)
    setShow(!show)
 }
 
  return (
   
    <div style={{padding:"1rem"}} className='button'>
        
        <button style={{ backgroundColor: show ? "#de6fa1" : "#e2725b", width:"5rem" }} onClick = {clicked}>
          {show ? "Show Add Task Bar"  : "Close Add Task Bar"}
          
          </button>

      {!clickBtn && <Task/>}
      
     
    </div>
  )

  }
export default Button;