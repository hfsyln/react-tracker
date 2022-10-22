import React from "react";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const AddTask = ({item}) => {
  
  console.log(item)
  const {task, id, date} = item
  
  const [sil, setSil] = useState(false)
  const [çiz, setÇiz] = useState(false)

  const deleteTask =()=> {
    setSil(!sil)
  }
  const üstÇiz = () => {
    setÇiz(!çiz)
  }
  
  return (
    <div>
           {item && !sil ?  <div class="card-body" key = {item.id}> 
                 <div  class="card" onClick={üstÇiz}>
                  <div style={{textDecoration: çiz ? "line-through" : ""}}>
                      <h5>{task}</h5>
                      <p class="card-text">{item.date}</p>
                      <FaTimes
                      style={{ color: "red" }}
                      onClick={deleteTask}/> 
                      </div>
                  </div> 
  </div> : "" }
    </div>
    
  )
}
export default AddTask;
