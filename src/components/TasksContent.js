import React, { useContext } from "react";

// Components

import TasksCategory from "./TasksCategory";

// Context

import TaskContext from "../helpers/TaskContext";

// Styles

import "./TasksContent.css";

const TasksContent = () => {
  const { arrData } = useContext(TaskContext);
  const { data } = arrData;

  let tasksUncomplete = data.filter((task) => {
    if (!task.done) {
      return task;
    }
  });

  let tasksComplete = data.filter((task) => {
    if (task.done) {
      return task;
    }
  });

  const renderCompleteTasks = () => {
    if (tasksComplete.length > 0) {
      return <TasksCategory title="Complete Tasks" tasks={tasksComplete} />;
    }
  };

  return (
    <div className="tasks-content">
      <TasksCategory tasks={tasksUncomplete} />
      {renderCompleteTasks()}
    </div>
  );
};

export default TasksContent;
