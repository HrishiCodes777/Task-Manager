import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { Link } from "react-router-dom";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="task-list-container">
      <div className="task-list">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem key={task.id} task={task} />

          ))
        ) : (
          <div className="no-tasks">
            <p className="no-tasks-text">No tasks available</p>
            <Link className="add-task-link" to="/add">
              Add a Task
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
