import React, { useRef, useEffect, useContext } from "react";
import TaskContext from "../../helpers/TaskContext";

// Styles

import "./TaskForm.css";

const TaskForm = () => {
  const { setArrData } = useContext(TaskContext);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const { value } = inputRef.current;

    console.log(value);

    if (value === "") {
      return;
    }

    setArrData({
      type: "add",
      dataForm: { id: Date.now(), content: value.trim(), done: false },
    });

    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" />
      <div className="container-buttons">
        <button>Add</button>
      </div>
    </form>
  );
};

export default TaskForm;
