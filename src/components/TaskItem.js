import React from "react";
import PropTypes from "prop-types";

// Styles

import "./TaskItem.css";

const TaskItem = ({ dataTask, handleToggle, handleDelete }) => {
  const { id, content, done } = dataTask;

  return (
    <li className="task-item">
      <input
        type="checkbox"
        id={id}
        defaultChecked={done}
        onChange={() => handleToggle(id)}
      />
      <label htmlFor={id} className="task-content">
        <span className="task-checkbox"></span>
        <p>{content}</p>
      </label>
      <button className="task-times" onClick={() => handleDelete(id)}>
        &#215;
      </button>
    </li>
  );
};

TaskItem.propTypes = {
  dataTask: PropTypes.exact({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }),
};

export default TaskItem;
