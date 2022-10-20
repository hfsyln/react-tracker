import React from "react";
import { FaTimes } from "react-icons/fa";



const AddTask = ({sendTask}) => {
  
  console.log(sendTask)

  const deleteTask =(id)=> {
    document.querySelector(".card").remove()
  }


  
  return (
    <div>
     {sendTask?.map((item)=>
        <div key= {item.id} class="card">
               
          <div class="card-body">
                 <h5 class="card-title">{item.task}</h5>
                 <p class="card-text">{item.date}</p>
                 <FaTimes
              style={{ color: "red" }}
              onClick={() => deleteTask(item.id)}
            />
              
             </div>
        </div >)}
    </div>
  )
}

export default AddTask