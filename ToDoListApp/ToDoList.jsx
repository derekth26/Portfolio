import React, { useState } from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Button from '@mui/material/Button';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]); // Only add new task
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      // Swap the task with the one above it
      const temp = updatedTasks[index - 1];
      updatedTasks[index - 1] = updatedTasks[index];
      updatedTasks[index] = temp;
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      // Swap the task with the one below it
      const temp = updatedTasks[index + 1];
      updatedTasks[index + 1] = updatedTasks[index];
      updatedTasks[index] = temp;
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1> To Do List <CalendarMonthIcon></CalendarMonthIcon></h1>
      <div className="add">
        <input
          type="text"
          placeholder="Enter a Task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <Button variant="contained"onClick={addTask} sx={{ padding: '8px', backgroundColor: '#6478de', color: '#fff',marginLeft: '16px', '&:hover': {
        backgroundColor: '#5367cf'
    }
  }}
>
          Add
          </Button>

          

      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <Button variant="contained" className="delete-button" onClick={() => deleteTask(index)} sx={{ padding: '8px', backgroundColor: '#c2605d', color: '#fff',marginLeft: '16px', '&:hover': {
        backgroundColor: '#ad4f4c'
    }
    }}>
              Delete
            </Button>
            <Button variant="contained" className="move-button" onClick={() => moveTaskUp(index)} sx={{ padding: '8px', backgroundColor: '#6478de', color: '#fff',marginLeft: '16px', '&:hover': {
        backgroundColor: '#5367cf'
    }
  }}>
              Up
            </Button>
            <Button variant="contained" className="move-button" onClick={() => moveTaskDown(index)} sx={{ padding: '8px', backgroundColor: '#6478de', color: '#fff',marginLeft: '16px', '&:hover': {
        backgroundColor: '#5367cf'
    }
  }}>
              Down
            </Button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
