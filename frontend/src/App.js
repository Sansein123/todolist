import React from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import {TaskContext} from './TaskContext';

function App() {
    const task = { title: 'Example Task' };
    const tasks = [task];

    return (
        <TaskContext.Provider value={tasks}>
            <TaskForm />
            <TaskList />
        </TaskContext.Provider>
    );
}

export default App;