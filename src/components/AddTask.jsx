import Task from "./Task/Task"

const AddTask = (sendTask) => {
  console.log(sendTask)
  const {task, date} = sendTask
  console.log(task)
  console.log(date)
  return (
    <div className="card">
      <h1>{task}</h1>
      <p>{date}</p>
    </div>
  )
}

export default AddTask