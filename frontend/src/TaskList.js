import React, { useContext } from 'react';
import Task from './Task';
import {TaskContext} from './TaskContext';

function TaskList() {
    const tasks = useContext(TaskContext);

    return (
        <div>
            {tasks.map((task, index) => (
                <Task key={index} task={task} />
            ))}
        </div>
    );
}

export default TaskList;