import React from "react";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const AddTask = ({sendTask}) => {
  
  console.log(sendTask)
  const [sil, setSil] = useState(true)

  const deleteTask =()=> {
    setSil(!sil)
  }
  
  return (
    <div >
     {sendTask?.map((item)=>
      <div class="card-body">
            <div key={item.id} class="card">
                <h5>{item.task}</h5>
                <p class="card-text">{item.date}</p>
              <FaTimes
           style={{ color: "red" }}
           onClick={deleteTask}
         />
      </div> 
      </div>)}
    </div>
  )
}
export default AddTask
