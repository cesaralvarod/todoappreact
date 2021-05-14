import React from "react";

// Component

import TaskForm from "./forms/TaskForm";

// Styles

import "./FormContent.css";

const FormContent = ({ setArrData }) => {
  return (
    <div className="form-content">
      <h2>Add Task</h2>
      <TaskForm setArrData={setArrData} />
    </div>
  );
};

export default FormContent;
