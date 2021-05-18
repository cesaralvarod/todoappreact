import React, { useContext } from "react";

// Components

import TaskItem from "./TaskItem";

// Context

import TaskContext from "../helpers/TaskContext";

// Styles

import "./TasksList.css";

const TasksList = ({ tasks }) => {
  const { setArrData } = useContext(TaskContext);

  const handleToggle = (id) => {
    setArrData({ type: "change", id: id });
  };

  const handleDelete = (id) => {
    setArrData({ type: "delete", id: id });
  };

  const tasksRender = tasks.map((task) => {
    return (
      <TaskItem
        key={task.id}
        dataTask={task}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
    );
  });

  return <ul className="tasks-list">{tasksRender}</ul>;
};

export default TasksList;
