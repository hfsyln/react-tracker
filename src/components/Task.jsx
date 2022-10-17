import React from 'react'

const Task = () => {
  return (
    <div>
          <div className="entered">
            <label htmlFor="">Task</label>
            <input type="text" />
            <label htmlFor="">Day & time</label>
            <input type="text" />
            <button>Save Task</button>
        </div>
         
    </div>
  )
}

export default Task