import React from 'react';
import { CgClose, CgInfo } from "react-icons/cg"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskRemove}) => {
  const history = useHistory(); 

  const handleTaskDetailsClick = () => {
    history.push(`/${task.title}`)
  }

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
        <button className="see-details-task-button" onClick={handleTaskDetailsClick}>
          <CgInfo />
        </button>
      </div>
    </div>
  )  

}
 
export default Task;