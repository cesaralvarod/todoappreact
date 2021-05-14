import React from "react";

// Components

import TasksCategory from "./TasksCategory";

// Styles

import "./TasksContent.css";

const TasksContent = ({ arrData }) => {
  const { data } = arrData;

  let tasksUncomplete = data.filter((task) => {
    if (!task.isComplete) {
      return task;
    }
  });

  let tasksComplete = data.filter((task) => {
    if (task.isComplete) {
      return task;
    }
  });

  return (
    <div className="tasks-content">
      <TasksCategory tasks={tasksUncomplete} />
      <TasksCategory
        title="Complete Tasks"
        tasks={tasksComplete}
        arrComplete={true}
      />
    </div>
  );
};

export default TasksContent;
