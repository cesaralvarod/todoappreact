import React from "react";
import PropTypes from "prop-types";

// Styles

import "./TaskItem.css";

const TaskItem = ({ dataTask }) => {
  const { id, content, isComplete } = dataTask;

  return (
    <li className="task-item">
      <input type="checkbox" id={id} defaultChecked={isComplete} />
      <label htmlFor={id} className="task-content">
        <span className="task-checkbox"></span>
        <p>{content}</p>
      </label>
      <button className="task-times">&#215;</button>
    </li>
  );
};

TaskItem.propTypes = {
  dataTask: PropTypes.exact({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired,
  }),
};

export default TaskItem;
