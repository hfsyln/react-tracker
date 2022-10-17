import React, { useState } from 'react'
import Task from '../Task';


const Button = () => {
    const [clickBtn, setClickBtn] = useState(true);
    
 console.log(clickBtn)
 
 const clicked = (e) => {
    setClickBtn(!clickBtn)

    if(clickBtn) {
       e.target.style.backgroundColor = "red";
       e.target.textContent = "Close Add Task Bar"
    }
    else {
        e.target.style.backgroundColor = "pink";
        e.target.textContent = "Show Add Task Bar"
        e.nextElementSibling.style.display = "none"

    }
 }
 
  return (
   
    <div className='button'>
        
        <button onClick = {clicked}>Show Add Task Bar</button>

        <div className= {clickBtn ? "div-flex" : "div-none" }>
            <Task/>
        </div>
     
    </div>
  )

  }
export default Button