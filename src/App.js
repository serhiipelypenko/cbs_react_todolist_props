import {useState} from "react";
import './styles/App.css'
import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";

function App() {
  const [tasks, setTasks] =useState([
      {id: 1, title: 'Main task 1', body: 'To clear home'},
      {id: 2, title: 'Not necessary task 2', body: 'Feeding cat'},
      {id: 3, title: 'Low priority task 3', body: 'Do homework'}
  ]);

  const createTask = (newTask) => {
      setTasks([...tasks, newTask]);
  }

  const removeTask = (task) => {
      setTasks(tasks.filter(one_task => one_task.id !== task.id));
  }

  return (
    <div className="App">
        <TaskForm create={createTask} />
        {tasks.length !== 0
            ? <TaskList remove={removeTask} tasks={tasks}/>
            : <h1 style={{textAlign: 'center'}}>Tasks not found!</h1>
        }

    </div>
  );
}

export default App;
