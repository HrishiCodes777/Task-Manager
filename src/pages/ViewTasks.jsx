import TaskList from "../components/TaskList";

export default function ViewTasks() {
  return (
    <div className="view-tasks-container">
      <h1 className="view-tasks-heading">Your Tasks</h1>
      <TaskList />
    </div>
  );
}
