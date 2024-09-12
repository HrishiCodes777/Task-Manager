import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks,setTasks] = useState([]);

    //Local Storage se tasks load kiya
    useEffect(()=>{
        // localStorage.clear();
        const localTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(localTasks);
    },[])

    //Localstorage mai tasks ko update kiya
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
    
    //tasks state ko update kiya
    const addTask = (newTask) => {
        setTasks((prevTasks) => [...prevTasks, newTask]);
    }

    //Updating Task Status
    const toggleTaskCompletion = (taskId) => {
        setTasks((prevTasks) =>
          prevTasks.map(task =>
            task.id === taskId ? { ...task, status: !task.status } : task
          )
        );
    };

    //Deleting Task
    const deleteTask = (taskId) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id!== taskId));
    }
    return(
        <TaskContext.Provider value={{ tasks, addTask,toggleTaskCompletion,deleteTask }}>
            {children}
        </TaskContext.Provider>
    )
}