import { useState } from "react";
import AddTask from "../AddTask";

const Task = () => {

  const [task, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [sendTask, setSendTask] = useState("")

  
  const handleSubmit = (e) => {
    // form içerisindeki buton submit olur ve handlesubmit otomatik çalışır
    e.preventDefault();
    const newTask = { task, date}; //aynı isim ile gönderiyorsam yeterli ama t:title de olur
    console.log(newTask)
    setSendTask([newTask])
    console.log(sendTask)
    console.log(...sendTask)
    setTitle("");
    setDate("");
  };




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
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="desc" className="form-label">
          Date
        </label>
        <input
          type="text"
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

    <AddTask sendTask = {...sendTask} />
  </div>
 
  )
}

export default Task;