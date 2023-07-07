import React, { useState } from 'react';
import "./AddTask.css"
import Button from './Button';

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
        setInputData("");
    }

    return (
      <div className='addtask-container'>
        <input onChange={handleInputChange} value={inputData} type="text" className='addtask-input' />
        <div className="addtask-button-container">
          <Button onClick={handleAddTaskClick}>Adicionar</Button>
        </div>
      </div>
    );
}
 
export default AddTask;