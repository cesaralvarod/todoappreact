import React from "react";

// Components

import TaskItem from "./TaskItem";

// Styles

import "./TasksList.css";

const TasksList = ({ tasks }) => {
  const tasksList = tasks;

  const tasksRender = tasksList.map((task) => {
    return <TaskItem key={task.id} dataTask={task} />;
  });

  return <ul className="tasks-list">{tasksRender}</ul>;
};

export default TasksList;
