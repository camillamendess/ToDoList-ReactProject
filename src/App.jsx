import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "./App.css";

import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskDetails from "./components/TaskDetails";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Programação",
      completed: false,
    },
    {
      id: "2",
      title: "Ler livros",
      completed: true,
    },
  ]);

  const handleTaskRemove = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId)
        return {
          ...task,
          completed: !task.completed,
        };
      return task;
    });
    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newTasks);
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <ul>
          <li>
            <Link to="/ToDoList-projetoReact">Home</Link>
          </li>
          <li>
            <HashLink smooth to="/ToDoList-projetoReact#add-task">
              Add Task
            </HashLink>
          </li>
        </ul>
        <Route
          path="/ToDoList-projetoReact"
          exact
          render={() => (
            <>
              <div id="add-task">
                <AddTask handleTaskAddition={handleTaskAddition} />
              </div>
              <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskRemove={handleTaskRemove}
              />
            </>
          )}
        />
        <Route path="/task/:taskTitle" exact component={TaskDetails} />
      </div>
    </Router>
  );
};

export default App;
