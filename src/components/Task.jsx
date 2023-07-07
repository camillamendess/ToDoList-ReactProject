import React from 'react';
import { CgClose } from "react-icons/cg"
import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskRemove}) => {

  return (
    <div className="task-container" style={task.completed ? {borderLeft: "6px solid #8e37a3" } : {} }
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">
        <button className="remove-task-button" onClick={() => handleTaskRemove(task.id)}>
          <CgClose />
        </button>
      </div>
    </div>
  )  

}
 
export default Task;