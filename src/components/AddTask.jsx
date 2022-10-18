import Task from "./Task/Task"

const AddTask = ({task, date}) => {
  return (
    <div>
      <h1>{task}</h1>
      <p>{date}</p>
    </div>
  )
}

export default AddTask