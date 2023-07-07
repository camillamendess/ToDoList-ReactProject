import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Header from "./components/Header";

const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Programação",
      completed: true,
    },
    {
      id: "2",
      title: "Ler livros",
      completed: false,
    },
  ]);

  const handleTaskRemove = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);  
  }

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if(task.id === taskId) return {
        ...task, completed: !task.completed
      }
      return task;
    });
    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks, {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      }
    ];
    setTasks(newTasks);
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tasks} 
        handleTaskClick={handleTaskClick} handleTaskRemove= {handleTaskRemove} />
      </div>
    </Router>
  );
};

export default App;