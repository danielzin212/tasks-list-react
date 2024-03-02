import React, { useState } from "react";

import Button from "./ButtonTask";

import "./AddTask.css";

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddTaksClick = () => {
    handleTaskAddition(inputData);
    setInputData("");
  };

  return (
    <div className="add-task-container">
      <input
        onChange={handleInputChange}
        value={inputData}
        className="add-task-input"
        type="text"
        id=""
      />
      ;
      <div className="add-task-button-container">
        <Button onClick={handleAddTaksClick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
