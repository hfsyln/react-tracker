import { useState } from "react";
import AddTask from "../AddTask";

const Task = () => {
  const [showTask, setShowTask] = useState("")
  const [showDate, setShowDate] = useState("")

  
  const changeValue = () => {
   document.querySelector(".div-none").classList.add("div-none");
   document.querySelector(".div-flex").classList.remove("div-flex");
  }
  return (
    <div className="taskEdit">
          <div className="entered">
            <label htmlFor="">Task</label>
            <input type="text"   
            value={showTask}
            onChange={(e) => {setShowTask(e.target.value);}}/>
            
            <label htmlFor="">Day & time</label>
            <input type="text"  
              value={showDate}
              onChange={(e) => {setShowDate(e.target.value);}}/>
            
            <button onClick={changeValue}>Save Task</button>
          </div>
          <div className="div-flex" >
            
          <p>fgb</p>
          <AddTask  task = {showTask}  date = {showDate} />
          </div>
    </div>
  )
}

export default Task