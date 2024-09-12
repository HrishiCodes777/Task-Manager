import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

export default function TaskItem({task}) {
  const {deleteTask,toggleTaskCompletion} = useContext(TaskContext);
  return (
    <div className="task-item">
      <h3 className="task-title">{task.title}</h3>
      <p className="task-description">{task.description}</p>
      <p className="task-details">
        Created At: {task.createdDate} | Due: {task.dueDate} | Priority: {task.priority}
      </p>
      <button className={`task-action-btn ${task.status ? 'complete-btn' : 'pending-btn'}`} onClick={() => toggleTaskCompletion(task.id)}>
        {task.status ? "Completed" : "Pending"}
      </button>
      <button className="task-action-btn delete-btn" onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  )
}
