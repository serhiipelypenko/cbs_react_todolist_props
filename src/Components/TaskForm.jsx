import React, {useState} from 'react';
import Input from "./Form/input/Input";
import Button from "./Form/button/Button";

const TaskForm = ({create}) => {
    const [task, setTask] = useState({title: '', body: ''});

    const addNewTask = (e) => {
        e.preventDefault();
        const newTask = {
            ...task,
            id: Date.now()
        }
        create(newTask);
        setTask({title:'', body:''});
    }

    return (
        <form>
            <Input value={task.title} onChange={e => setTask({...task, title: e.target.value})} type="text" placeholder="Enter task title" />
            <Input value={task.body} onChange={e => setTask({...task, body: e.target.value})} type="text" placeholder="Enter task description" />
            <Button onClick={addNewTask}>Create task</Button>
        </form>
    );
}

export default TaskForm;