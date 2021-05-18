import React from "react";
import PropTypes from "prop-types";

// Components

import TasksList from "./TasksList";

// Styles

import "./TasksCategory.css";

const TasksCategory = ({ title, tasks }) => {
  return (
    <div className="tasks-category">
      {title && <h3>{title}</h3>}
      <TasksList tasks={tasks} />
      <p className="total-p">Total: {tasks.length}</p>
    </div>
  );
};

TasksList.propTypes = {
  title: PropTypes.string,
  tasks: PropTypes.array,
};

export default TasksCategory;
