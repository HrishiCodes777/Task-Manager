import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskForm(){

  const {addTask,tasks} = useContext(TaskContext);

  const [formData,setFormData] = useState({
    title: '',
    description: '',
    createdDate: '',
    dueDate: '',
    status: false,
    priority: 'Medium'
  });


  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const validateData = (data) => {
    if(data.title.trim().length===0){
      alert('Task Title is required');
      return false;
    }
    if(data.description.trim().length===0){
      alert('Task Description is required');
      return false;
    }
    if(data.createdDate.trim().length===0){
      alert('Creation Date is required');
      return false;
    }
    if(data.dueDate.trim().length===0){
      alert('Due Date is required');
      return false;
    }
    if(new Date(data.dueDate) < new Date(data.createdDate)){
      alert('Due Date should be a future date');
      return false;
    }
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    validateData(formData);
    console.log(formData);
    const newTask = {
      ...formData,
      id: tasks.length+1,
      completed: formData.status
    }
    addTask(newTask);
    setFormData({
      title: '',
      description: '',
      createdDate: '',
      dueDate: '',
      status: false,
      priority: 'Medium'
    });
  }

  return(
    <div className="task-form-container">
      <form className="task-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="title" 
          placeholder="Task Title"
          onChange={handleInputChange}
          value={formData.title}
          required
        />
        <br></br>
        <textarea
          name="description"
          placeholder="Task Description"
          rows={10}
          onChange={handleInputChange}
          value={formData.description}
          required
        />
        <br></br>

        <div className="date-input">
          <label htmlFor="created-date">Created At</label>
          <input 
            type="date" 
            name="createdDate"
            onChange={handleInputChange}
            value={formData.createdDate}
            required
          />
        </div>
        <div className="date-input">
          <label htmlFor="dueDate">Due Date:</label>
          <input 
            type="date" 
            name="dueDate"
            onChange={handleInputChange}
            value={formData.dueDate}
            required
          />
        </div>
        <div className="status-priority-wrapper">
          <label>
            <input
              type="checkbox"
              name="status"
              onChange={handleInputChange}
              checked={formData.status}
            />{' '}
            Completed
          </label>

          <div className="priority-select">
            <label htmlFor="priority">Priority</label>
            <select
              name="priority"
              id="priority"
              onChange={handleInputChange}
              value={formData.priority}
              required
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>
        <br></br>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}