import React from 'react';
import TaskItem from "./TaskItem";

const TaskList = (props) => {
    return (
        <div>
            <h1>My Tasks</h1>
            {props.tasks.map((task, index) =>
                <TaskItem remove={props.remove} number={index+1} task={task} key={task.id} />
            )}
        </div>
    );
}

export default TaskList;