import React from 'react';
import Button from "./Form/button/Button";

const TaskItem = (props) => {
    return (
        <div className="task">
            <div className="task__content">
                <strong>{props.number}. {props.task.title}</strong>
                <div>{props.task.body}</div>
            </div>
            <div className="task__btns">
                <Button onClick={() => props.remove(props.task)}>Remove</Button>
            </div>
        </div>
    );
}

export default TaskItem;