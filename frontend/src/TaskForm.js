import React, { useState, useContext } from 'react';
import {TaskContext} from './TaskContext';

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const addTask = (title) => {
        setTasks([...tasks, { title }]);
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask }}>
            {children}
        </TaskContext.Provider>
    );
};

// Assuming you have a form component where you want to add tasks
const TaskForm = () => {
    const { addTask } = useContext(TaskContext);
    const [taskTitle, setTaskTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(taskTitle); // Call addTask here
        setTaskTitle(''); // Reset input field
    };

    const handleChange = (e) => {
        setTaskTitle(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={taskTitle} onChange={handleChange} />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;