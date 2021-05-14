import React from "react";

// Styles

import "./TaskForm.css";

const TaskForm = ({ setArrData }) => {
  let content = "";
  let data = {};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content !== "") {
      data = {
        id: Date.now(),
        content: content,
        isComplete: false,
      };
      setArrData({ type: "add", dataForm: data });
      e.target.reset();
    }
  };

  const handleInputTextarea = (e) => {
    content = e.target.value;
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Add a task"
        onInput={handleInputTextarea}
      ></textarea>
      <div className="container-buttons">
        <button>Add</button>
      </div>
    </form>
  );
};

export default TaskForm;
