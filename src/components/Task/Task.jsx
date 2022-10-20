import { useState } from "react";
import AddTask from "../AddTask";

const Task = () => {
<<<<<<< HEAD
  
  const [task, setTask] = useState("")
  const [date, setDate] = useState("")
  const [sendTask, setSendTask] = useState([])
  
=======

  const [task, setTask] = useState("")
  const [date, setDate] = useState("")
  const [sendTask, setSendTask] = useState([])
>>>>>>> 6feb390478e601f0410682deac899f7f698ec258

  

  const handleSubmit = (e) => {
    // form içerisindeki buton submit olur ve handlesubmit otomatik çalışır
    e.preventDefault();
<<<<<<< HEAD
    
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
  
=======
    const newTask = { task, date}; //aynı isim ile gönderiyorsam yeterli ama t:title de olur
    
    console.log(newTask)
    
    setSendTask([...sendTask, newTask])
    console.log(sendTask)
    
    setTask("");
    setDate("");
  };

  console.log(sendTask)

  


>>>>>>> 6feb390478e601f0410682deac899f7f698ec258
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
<<<<<<< HEAD
     <AddTask  sendTask = {sendTask}/>
  </div>
=======

    
    {sendTask.map((item, index)=> {
      console.log(item)
      return <AddTask  item = {item} index ={index} />
    })}
    
  </div>
 
    
>>>>>>> 6feb390478e601f0410682deac899f7f698ec258
  )
}

export default Task;