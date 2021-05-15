import React, { useRef, useEffect } from "react";

// Styles

import "./TaskForm.css";

const TaskForm = ({ setArrData }) => {
  const refInput = useRef(null);

  useEffect(() => {
    refInput.current.focus();
  }, []);

  const sendData = (data) => [
    setArrData({
      type: "add",
      dataForm: data,
    }),
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const content = refInput.current.value;
    if (content !== "") {
      sendData({ id: Date.now(), content: content, done: false });
      e.target.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={refInput} type="text" />
      <div className="container-buttons">
        <button>Add</button>
      </div>
    </form>
  );
};

export default TaskForm;
