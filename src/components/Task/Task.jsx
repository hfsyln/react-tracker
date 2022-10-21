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
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Task
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter your title"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="desc" className="form-label">
          Date
        </label>
        <input
          type="date"
          className="form-control"
          id="desc"
          placeholder="Enter your Description"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <button className="btn btn-danger mb-4">Submit</button>
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