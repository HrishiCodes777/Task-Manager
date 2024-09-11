import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="nav-link">
            <Link to="/">Home</Link>
        </div>
        <div className="nav-link">
            <Link to="/add">Add a Task</Link>
        </div>
        <div className="nav-link">
            <Link to="/tasks">View Tasks</Link>
        </div>
    </div>
  )
}
