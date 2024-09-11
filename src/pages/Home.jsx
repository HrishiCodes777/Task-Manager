import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className='home'>
      <h1>Task Manager</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, temporibus.</p>
        <div className='home-buttons'>
            <Link to='/tasks' className='home-button'>View Tasks</Link>
            <Link to='/add' className='home-button'>Add Task</Link>
        </div>
    </div>
  )
}
