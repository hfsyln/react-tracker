import { useState } from "react";
import AddTask from "../AddTask";
import Button from "../button/Button"

const Task = () => {
  
  const [task, setTask] = useState("")
  const [date, setDate] = useState("")
  const [sendTask, setSendTask] = useState([])
  

  

  const handleSubmit = (e) => {
    // form içerisindeki buton submit olur ve handlesubmit otomatik çalışır
    e.preventDefault();
    
    const newTask = {
     
      id:Math.floor(Math.random()*1000),
      "task":task,
      "date":date
      
      }; 
      
    setSendTask([...sendTask, newTask])
    setTask("");
    setDate("");
  };
  
  console.log(sendTask)
  
  return (
    
    <div className="container text-center mt-4">
    <h1 className="display-6 text-danger">Add Your Tutorial</h1>
    <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:"1rem", alignItems:"center", padding:"1rem"}}>
      <div style={{display:"flex", gap:"1rem", alignItems:"center"}}>
        <label htmlFor="title" className="form-label">
          Task:
        </label>
        <input
          type="text"
          style={{maxWidth:"6rem", height:"2rem"}}
          id="title"
          placeholder="Enter your title"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
      </div>
      <div style={{display:"flex", gap:"1rem", alignItems:"center"}}>
        <label htmlFor="desc" className="form-label">
          Date:
        </label>
        <input
          type="date"
          style={{maxWidth:"6rem", height:"2rem"}}
          id="desc"
          placeholder="Enter your Description"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <button style={{backgroundColor:"pink", border:"none", height:"2rem", width:"4rem"}}>Submit</button>
    </form>

    {sendTask.length ?
    sendTask.map((item) =>{
      console.log(item)
      return <AddTask  item = {item}/>
    }) : <p>No Task to Show</p>}

    
  </div>
   
  )
}

export default Task;