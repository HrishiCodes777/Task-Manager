export default function TaskItem({task}) {
  return (
    <div className="task-item">
      <h3 className="task-title">{task.title}</h3>
      <p className="task-description">{task.description}</p>
      <p className="task-details">
        Created At: {task.createdDate} | Due: {task.dueDate} | Priority: {task.priority}
      </p>
      <button className={`task-action-btn ${task.status ? 'complete-btn' : 'pending-btn'}`}>
        {task.status ? "Completed" : "Mark as Complete"}
      </button>
      <button className="task-action-btn delete-btn">Delete</button>
    </div>
  )
}
