import { useState } from 'react';
import { Input } from './form/Input';
import { DisplayTask } from './form/DisplayTask';

export function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInput = (event) => {
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
      <Input newTask={newTask} handleInputChange={handleInput} addTask={addTask} />
      <DisplayTask tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

