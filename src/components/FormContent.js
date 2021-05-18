import React, { memo } from "react";

// Component

import TaskForm from "./forms/TaskForm";

// Styles

import "./FormContent.css";

const FormContent = memo(() => {
  return (
    <div className="form-content">
      <h2>Add Task</h2>
      <TaskForm />
    </div>
  );
});

export default FormContent;
