import { useState } from 'react';
import { Input } from './form/Input';

export function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <Input newTask={newTask} handleInputChange={handleInputChange} addTask={addTask} />
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <div className='flex items-center space-x-4'>
              <p>{task}</p>
              <button onClick={() => deleteTask(index)}>Supprimer</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

